# 📝 EmailJS Quick Reference Card

## 🔑 Your Credentials (Fill this out!)

```javascript
// Save these for quick access:

Service ID:    _______________________________
Template ID:   _______________________________
Public Key:    _______________________________
```

---

## 📍 Where to Update in Code

**File:** `src/components/WelcomeModal.jsx`  
**Lines:** 178-180

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // ← Paste here
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // ← Paste here
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // ← Paste here
```

---

## 🎯 Email Template Variables

Use these in your EmailJS template:

```
{{from_name}}      → User's full name
{{from_email}}     → User's email address
{{mobile}}         → User's mobile number
{{message}}        → User's message
{{to_name}}        → Your name (set to "Admin")
```

---

## ⚡ Quick Test

1. Clear session: `sessionStorage.clear()`
2. Refresh page
3. Fill form
4. Submit
5. Check email (including spam folder)

---

## 🔗 Quick Links

- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- [Get Service ID](https://dashboard.emailjs.com/admin)
- [Get Template ID](https://dashboard.emailjs.com/admin/templates)
- [Get Public Key](https://dashboard.emailjs.com/admin/account)

---

## 🐛 Common Errors

| Error | Fix |
|-------|-----|
| `invalid_service_id` | Check Service ID in dashboard |
| `invalid_template_id` | Check Template ID in dashboard |
| `invalid_public_key` | Check Public Key in Account section |
| No email received | Check spam, wait 2-3 minutes |

---

## ✅ Checklist

- [ ] Created EmailJS account
- [ ] Connected email service (Gmail/Outlook)
- [ ] Created email template
- [ ] Copied Service ID
- [ ] Copied Template ID
- [ ] Copied Public Key
- [ ] Updated WelcomeModal.jsx
- [ ] Tested form submission
- [ ] Received test email

---

**Pro Tip:** Take a screenshot of your credentials page in EmailJS dashboard for easy reference!
