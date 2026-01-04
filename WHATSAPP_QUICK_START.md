# WhatsApp Admin Alert - Quick Start

## 🚀 Quick Setup (5 Minutes)

### 1. Get Twilio Credentials

1. Go to: https://console.twilio.com/
2. Sign up / Log in
3. Go to **Messaging** → **Try it out** → **Send a WhatsApp message**
4. Join the sandbox (send join code to Twilio number)
5. Go to **Account** → **API Keys & Tokens**
6. Copy **Account SID** and **Auth Token**

### 2. Add to `.env.local`

```env
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your-auth-token-here
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
ADMIN_WHATSAPP_NUMBER=whatsapp:+918861836384
```

**Important**:
- Replace `+918861836384` with YOUR phone number
- Must include country code (e.g., `+91` for India)
- Must include `whatsapp:` prefix

### 3. Restart Server

```bash
# Stop server (Ctrl+C)
npm run dev
```

### 4. Test

1. Go to http://localhost:3000/contact
2. Submit the form
3. Check your WhatsApp!

## ✅ Verification

**You'll receive**:
```
🔔 New Project Enquiry

Name: [Client Name]
Email: [Client Email]
Phone: [Client Phone]
Project: [Project Type]

Summary: [First 100 chars...]
```

## 🐛 Quick Troubleshooting

**Not receiving WhatsApp?**
- ✅ Restart server after adding `.env.local`
- ✅ Check phone number format: `whatsapp:+918861836384`
- ✅ Verify sandbox is joined
- ✅ Check server console for errors

**Email still works?**
- ✅ Yes! Email is primary, WhatsApp is optional
- ✅ If WhatsApp fails, email still sends

## 📚 Full Guides

- **Detailed Setup**: See `WHATSAPP_ENABLE_GUIDE.md`
- **Test Checklist**: See `WHATSAPP_TEST_CHECKLIST.md`
- **Original Setup**: See `WHATSAPP_SETUP.md`

---

**Status**: Implementation complete ✅ | Just needs configuration

