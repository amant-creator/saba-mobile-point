# 📧 EmailJS Email Templates - Copy & Paste Ready

Choose one of these templates and paste it directly into your EmailJS template editor.

---

## ✨ Template 1: Clean & Professional

### Subject Line:
```
New Contact from {{from_name}} - Saba Mobile Point
```

### Email Body (Text Version):
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 NEW CONTACT FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You have received a new message from your website!

👤 CONTACT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:           {{from_name}}
Email:          {{from_email}}
Mobile Number:  {{mobile}}


💬 MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 This email was sent from: Saba Mobile Point Contact Form
🌐 Website: https://your-website.com
⏰ Timestamp: {{reply_to}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To reply to this customer, simply hit "Reply" to this email.
Their email address ({{from_email}}) is set as the reply-to address.
```

---

## 🎨 Template 2: Colorful HTML (Recommended)

### Subject Line:
```
🔔 New Contact: {{from_name}} | Saba Mobile Point
```

### Email Body (HTML Version):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 600;">
                🔔 New Contact Form Submission
            </h1>
            <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">
                Someone just filled out your website contact form!
            </p>
        </div>

        <!-- Content -->
        <div style="padding: 30px 20px;">
            
            <!-- Name -->
            <div style="margin-bottom: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #667eea; border-radius: 6px;">
                <div style="font-size: 12px; color: #667eea; font-weight: 600; text-transform: uppercase; margin-bottom: 5px;">
                    👤 Full Name
                </div>
                <div style="font-size: 16px; color: #333; font-weight: 500;">
                    {{from_name}}
                </div>
            </div>

            <!-- Email -->
            <div style="margin-bottom: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #667eea; border-radius: 6px;">
                <div style="font-size: 12px; color: #667eea; font-weight: 600; text-transform: uppercase; margin-bottom: 5px;">
                    📧 Email Address
                </div>
                <div style="font-size: 16px; color: #333; font-weight: 500;">
                    <a href="mailto:{{from_email}}" style="color: #667eea; text-decoration: none;">
                        {{from_email}}
                    </a>
                </div>
            </div>

            <!-- Mobile -->
            <div style="margin-bottom: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #667eea; border-radius: 6px;">
                <div style="font-size: 12px; color: #667eea; font-weight: 600; text-transform: uppercase; margin-bottom: 5px;">
                    📱 Mobile Number
                </div>
                <div style="font-size: 16px; color: #333; font-weight: 500;">
                    <a href="tel:{{mobile}}" style="color: #667eea; text-decoration: none;">
                        {{mobile}}
                    </a>
                </div>
            </div>

            <!-- Message -->
            <div style="margin-bottom: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #667eea; border-radius: 6px;">
                <div style="font-size: 12px; color: #667eea; font-weight: 600; text-transform: uppercase; margin-bottom: 8px;">
                    💬 Message
                </div>
                <div style="font-size: 15px; color: #555; line-height: 1.6; white-space: pre-wrap;">
                    {{message}}
                </div>
            </div>

            <!-- Quick Actions -->
            <div style="margin-top: 30px; text-align: center;">
                <a href="mailto:{{from_email}}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
                    📧 Reply to {{from_name}}
                </a>
            </div>

        </div>

        <!-- Footer -->
        <div style="background-color: #2c3e50; color: white; padding: 20px; text-align: center; font-size: 12px;">
            <p style="margin: 0 0 5px 0;">
                📍 <strong>Saba Mobile Point</strong>
            </p>
            <p style="margin: 0 0 5px 0;">
                All Mobile Services & Bill Payments
            </p>
            <p style="margin: 10px 0 0 0; opacity: 0.7;">
                This email was automatically generated from your website contact form
            </p>
        </div>

    </div>
</body>
</html>
```

---

## 📱 Template 3: Mobile-Optimized Simple

### Subject Line:
```
New Lead: {{from_name}} ({{mobile}})
```

### Email Body (Text Version):
```
New Contact Form Submission
━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:     {{from_name}}
Email:    {{from_email}}
Phone:    {{mobile}}

Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━
Reply to: {{from_email}}
```

---

## 💼 Template 4: Business Professional

### Subject Line:
```
[WEBSITE INQUIRY] {{from_name}} - Saba Mobile Point
```

### Email Body (HTML Version):
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #667eea;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .content {
            background-color: #f9f9f9;
            padding: 30px;
            border: 1px solid #e0e0e0;
        }
        .field {
            margin-bottom: 20px;
        }
        .label {
            font-weight: bold;
            color: #667eea;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .value {
            margin-top: 5px;
            padding: 12px;
            background-color: white;
            border-left: 3px solid #667eea;
            font-size: 15px;
        }
        .footer {
            background-color: #333;
            color: white;
            padding: 15px;
            text-align: center;
            border-radius: 0 0 8px 8px;
            font-size: 12px;
        }
        .button {
            display: inline-block;
            background-color: #667eea;
            color: white;
            padding: 12px 25px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h2 style="margin: 0;">📋 Website Contact Form</h2>
        <p style="margin: 10px 0 0 0; font-size: 14px;">New inquiry received</p>
    </div>
    
    <div class="content">
        <div class="field">
            <div class="label">Contact Name</div>
            <div class="value">{{from_name}}</div>
        </div>
        
        <div class="field">
            <div class="label">Email Address</div>
            <div class="value">
                <a href="mailto:{{from_email}}" style="color: #667eea;">{{from_email}}</a>
            </div>
        </div>
        
        <div class="field">
            <div class="label">Phone Number</div>
            <div class="value">
                <a href="tel:{{mobile}}" style="color: #667eea;">{{mobile}}</a>
            </div>
        </div>
        
        <div class="field">
            <div class="label">Message Content</div>
            <div class="value" style="white-space: pre-wrap;">{{message}}</div>
        </div>
        
        <div style="text-align: center; margin-top: 25px;">
            <a href="mailto:{{from_email}}" class="button">Reply to Customer</a>
        </div>
    </div>
    
    <div class="footer">
        <p style="margin: 0;"><strong>Saba Mobile Point</strong></p>
        <p style="margin: 5px 0;">All Mobile Services & Bill Payments</p>
        <p style="margin: 10px 0 0 0; opacity: 0.7; font-size: 11px;">
            Sent via website contact form | Reply directly to customer
        </p>
    </div>
</body>
</html>
```

---

## 🎯 Template 5: Minimal & Clean

### Subject Line:
```
{{from_name}} contacted you
```

### Email Body (Text Version):
```
New message from your website:

From: {{from_name}}
Email: {{from_email}}
Phone: {{mobile}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

---

## 🚀 Auto-Reply Template (Bonus)

Set up an auto-reply to the customer after they submit the form!

### Subject Line:
```
Thank you for contacting Saba Mobile Point!
```

### Email Body:
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px 20px; border: 1px solid #ddd; }
        .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2 style="margin: 0;">Thank You, {{from_name}}! ✓</h2>
        </div>
        <div class="content">
            <p>Dear {{from_name}},</p>
            <p>Thank you for reaching out to us through our website. We have received your message and will get back to you as soon as possible.</p>
            
            <div style="background: white; padding: 15px; border-left: 4px solid #667eea; margin: 20px 0;">
                <p style="margin: 0; font-size: 14px; color: #666;"><strong>Your message:</strong></p>
                <p style="margin: 10px 0 0 0;">{{message}}</p>
            </div>
            
            <p>Our team typically responds within 24 hours during business days.</p>
            
            <p><strong>📞 Need immediate assistance?</strong><br>
            Call us at: [Your Phone Number]<br>
            WhatsApp: [Your WhatsApp Number]</p>
            
            <p>Best regards,<br>
            <strong>Saba Mobile Point Team</strong></p>
        </div>
        <div class="footer">
            <p style="margin: 0;"><strong>Saba Mobile Point</strong></p>
            <p style="margin: 5px 0;">All Mobile Services & Bill Payments</p>
            <p style="margin: 10px 0 0 0; opacity: 0.7;">
                [Your Address] | [Your Phone] | [Your Email]
            </p>
        </div>
    </div>
</body>
</html>
```

---

## 📋 EmailJS Template Configuration Guide

### For Main Template (Your Inbox):

1. **From Email**: `noreply@emailjs.com` (default)
2. **From Name**: `Website Contact Form`
3. **To Email**: `your-email@gmail.com` ← **YOUR EMAIL**
4. **Reply To**: `{{from_email}}` ← **Important! This lets you reply directly**
5. **Subject**: Choose from templates above
6. **Content**: Choose from templates above

### For Auto-Reply Template (Customer Inbox):

1. **From Email**: `your-email@gmail.com` ← **YOUR EMAIL**
2. **From Name**: `Saba Mobile Point`
3. **To Email**: `{{from_email}}` ← **Customer's email**
4. **Reply To**: `your-email@gmail.com` ← **YOUR EMAIL**
5. **Subject**: `Thank you for contacting Saba Mobile Point!`
6. **Content**: Use Auto-Reply template above

---

## 🎨 Customization Tips

### To customize colors:
- Replace `#667eea` with your brand color (primary)
- Replace `#764ba2` with your brand color (secondary)

### To add your logo:
```html
<img src="https://your-website.com/logo.png" alt="Logo" style="max-width: 150px;">
```

### To add social media links:
```html
<a href="https://facebook.com/yourpage" style="color: white; margin: 0 10px;">Facebook</a>
<a href="https://instagram.com/yourpage" style="color: white; margin: 0 10px;">Instagram</a>
```

---

## ✅ Testing Your Template

1. Create template in EmailJS
2. Send test email from EmailJS dashboard
3. Check your inbox
4. Verify all variables are replaced correctly
5. Test "Reply" button works
6. Check on mobile device

---

**Choose the template that fits your style and copy it into EmailJS!**
