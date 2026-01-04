# 📧 EmailJS Setup Guide for WelcomeModal

This guide will walk you through setting up EmailJS to receive form submissions from your website directly to your email.

---

## 🚀 Quick Setup (15 minutes)

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (top right)
3. Create a free account (no credit card required)
4. Verify your email address

---

### Step 2: Add Email Service

1. After logging in, click **"Add New Service"** on the dashboard
2. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other supported service

3. **For Gmail users:**
   - Click on the Gmail service
   - Click **"Connect Account"**
   - Sign in with your Gmail account
   - Allow EmailJS to send emails on your behalf
   - Give your service a name (e.g., "Saba Mobile Contact Form")
   - Click **"Create Service"**

4. **Copy your Service ID** (you'll need this later)
   - It looks like: `service_xxxxxxx`

---

### Step 3: Create Email Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. **Delete the default content** and paste this template:

```
Subject: New Contact Form Submission from {{from_name}}

---

You have received a new message from your website contact form!

📧 CONTACT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:           {{from_name}}
Email:          {{from_email}}
Mobile:         {{mobile}}

💬 MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This message was sent from your website contact form.
Sent at: {{reply_to}}

Best regards,
Your Website Contact System
```

4. **Configure the template:**
   - **Template Name**: Give it a name (e.g., "Contact Form Template")
   - **From Email**: Use `{{from_email}}` or your business email
   - **From Name**: Use `{{from_name}}`
   - **To Email**: YOUR EMAIL ADDRESS (where you want to receive messages)
   - **Reply To**: `{{from_email}}` (so you can reply directly to the sender)

5. Click **"Save"**
6. **Copy your Template ID** (you'll need this later)
   - It looks like: `template_xxxxxxx`

---

### Step 4: Get Your Public Key

1. Click on **"Account"** in the left sidebar
2. Scroll down to **"API Keys"** section
3. **Copy your Public Key**
   - It looks like: `xxxxxxxxxxxxxxxxxx` (long string)

---

### Step 5: Update Your Code

Now open your `WelcomeModal.jsx` file and update these three lines:

**Find lines 178-180:**

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // Replace
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Replace
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Replace
```

**Replace with your actual credentials:**

```javascript
const EMAILJS_SERVICE_ID = 'service_xxxxxxx';      // From Step 2
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx';    // From Step 3
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxxxxx';   // From Step 4
```

**Example:**
```javascript
const EMAILJS_SERVICE_ID = 'service_abc123';
const EMAILJS_TEMPLATE_ID = 'template_xyz789';
const EMAILJS_PUBLIC_KEY = 'mK9xL2pQ8vR5wT3nH6sY4';
```

---

### Step 6: Test Your Form

1. Save the file
2. Go to your website: `http://localhost:5173/`
3. Clear session storage in browser console:
   ```javascript
   sessionStorage.clear()
   ```
4. Refresh the page
5. Fill out the form with test data
6. Click **Submit**
7. **Check your email!** (may take 1-2 minutes)

---

## 🎯 Example Email Template Variables

These variables are automatically filled from your form:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | User's full name | "John Doe" |
| `{{from_email}}` | User's email | "john@example.com" |
| `{{mobile}}` | User's mobile number | "9876543210" |
| `{{message}}` | User's message | "I need help with..." |
| `{{to_name}}` | Your name | "Admin" |

---

## 📧 Recommended Email Template Format

For a professional look, use this enhanced template:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #667eea; }
        .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #667eea; }
        .footer { background: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>🔔 New Contact Form Submission</h2>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">👤 Full Name:</div>
                <div class="value">{{from_name}}</div>
            </div>
            <div class="field">
                <div class="label">📧 Email Address:</div>
                <div class="value">{{from_email}}</div>
            </div>
            <div class="field">
                <div class="label">📱 Mobile Number:</div>
                <div class="value">{{mobile}}</div>
            </div>
            <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">{{message}}</div>
            </div>
        </div>
        <div class="footer">
            <p>This email was sent from your website contact form</p>
            <p>Saba Mobile Point | All Mobile Services & Bill Payments</p>
        </div>
    </div>
</body>
</html>
```

To use this:
1. In EmailJS template editor
2. Switch to **HTML** mode (toggle at top)
3. Paste the above code
4. Save

---

## 🔒 Security Best Practices

### Option 1: Using Environment Variables (Recommended for Production)

1. Create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxx
```

2. Update your `WelcomeModal.jsx`:

```javascript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

3. Add `.env` to your `.gitignore`:

```
.env
```

4. **IMPORTANT**: Never commit your `.env` file to GitHub!

### Option 2: Hard-coded (OK for now, but not recommended for production)

The current setup with hard-coded values is fine for testing and learning.

---

## 📊 EmailJS Free Tier Limits

- ✅ **200 emails per month** (free)
- ✅ **Unlimited templates**
- ✅ **No credit card required**

For higher limits, upgrade to a paid plan (starts at $7/month for 1000 emails).

---

## 🐛 Troubleshooting

### Problem: "Failed to send message" error

**Solution 1:** Check your credentials
- Verify Service ID, Template ID, and Public Key are correct
- Make sure there are no extra spaces

**Solution 2:** Check EmailJS dashboard
- Go to your EmailJS account
- Check "Auto-Reply" settings
- Make sure the service is connected

**Solution 3:** Check browser console
- Open DevTools (F12)
- Check Console tab for detailed error messages
- Common errors:
  - `invalid_service_id` → Wrong Service ID
  - `invalid_template_id` → Wrong Template ID
  - `invalid_public_key` → Wrong Public Key

### Problem: Email not received

1. **Check spam folder**
2. **Wait 2-3 minutes** (sometimes there's a delay)
3. **Verify template settings:**
   - Make sure "To Email" is set to your email address
   - Check that all variables are spelled correctly

### Problem: Variables showing as {{from_name}} instead of actual values

**Solution:**
- Make sure variable names in your template exactly match:
  ```javascript
  from_name
  from_email
  mobile
  message
  to_name
  ```
- No extra spaces or typos

---

## 📞 Testing Checklist

- [ ] EmailJS account created
- [ ] Email service connected (Gmail/Outlook)
- [ ] Service ID copied
- [ ] Template created with proper variables
- [ ] Template ID copied
- [ ] Public Key copied
- [ ] All three IDs updated in `WelcomeModal.jsx`
- [ ] File saved
- [ ] Form submitted with test data
- [ ] Email received in inbox (check spam too)
- [ ] Reply-to email is correct
- [ ] All form fields appear in email

---

## 🎉 Success!

Once you receive your first test email, your form is working perfectly!

You'll now receive an email every time someone fills out your contact form.

---

## 💡 Pro Tips

1. **Add email notifications to your phone** so you never miss a lead
2. **Set up email filters** to organize form submissions
3. **Create an auto-reply template** to thank users for contacting you
4. **Monitor your monthly quota** in the EmailJS dashboard
5. **Consider upgrading** if you get more than 200 submissions/month

---

## 🔗 Useful Links

- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Templates Guide](https://www.emailjs.com/docs/user-guide/creating-email-template/)
- [EmailJS API Reference](https://www.emailjs.com/docs/api/send/)

---

## 📧 Need Help?

If you're stuck, check:
1. EmailJS documentation
2. Browser console for error messages
3. EmailJS dashboard for service status

---

**Made with ❤️ for seamless email integration**
