# WhatsApp Integration Setup Guide

This guide explains how to set up WhatsApp integration for GENSOFT AI LABS contact form notifications.

## Features Implemented

1. **WhatsApp Admin Alert**: Automatic notification sent to admin when contact form is submitted
2. **WhatsApp Group Link**: Manual link on Contact page to join community group
3. **Floating WhatsApp Button**: Quick chat button that opens WhatsApp with prefilled message

## Setup Instructions

### Option 1: Twilio WhatsApp API (Recommended)

Twilio provides a reliable WhatsApp Business API that's easy to set up.

#### Step 1: Create Twilio Account

1. Go to [Twilio Console](https://console.twilio.com/)
2. Sign up for a free account (includes $15.50 credit)
3. Verify your email and phone number

#### Step 2: Get WhatsApp Sandbox Access

1. In Twilio Console, go to **Messaging** > **Try it out** > **Send a WhatsApp message**
2. Follow the instructions to join the WhatsApp sandbox
3. Send the join code to the Twilio WhatsApp number shown

#### Step 3: Get Your Credentials

1. In Twilio Console, go to **Account** > **API Keys & Tokens**
2. Copy your **Account SID** and **Auth Token**
3. Note your WhatsApp sandbox number (format: `whatsapp:+14155238886`)

#### Step 4: Configure Environment Variables

Add these to your `.env.local` file:

```env
TWILIO_ACCOUNT_SID=your-account-sid-here
TWILIO_AUTH_TOKEN=your-auth-token-here
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
ADMIN_WHATSAPP_NUMBER=whatsapp:+918861836384
```

**Important**: 
- Replace `+918861836384` with your actual admin WhatsApp number
- Format must include country code (e.g., `+91` for India)
- Use `whatsapp:` prefix for both FROM and TO numbers

#### Step 5: Upgrade to Production (Optional)

The sandbox is for testing. For production:
1. Go to **Messaging** > **Settings** > **WhatsApp Senders**
2. Request approval for your WhatsApp Business number
3. Once approved, update `TWILIO_WHATSAPP_FROM` with your approved number

### Option 2: WhatsApp Cloud API (Alternative)

If you prefer using Meta's WhatsApp Cloud API directly:

1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Create a WhatsApp Business App
3. Get your access token and phone number ID
4. Update the API route to use WhatsApp Cloud API instead of Twilio

**Note**: WhatsApp Cloud API requires more setup and verification.

## Features Breakdown

### 1. Admin WhatsApp Alert

**When**: Automatically triggered when contact form is submitted

**What it sends**:
```
🔔 New Project Enquiry

Name: [Client Name]
Email: [Client Email]
Phone: [Client Phone]
Project: [Project Type]

Summary: [First 100 chars of message]
```

**Configuration**: Set via environment variables (see above)

**Error Handling**: If WhatsApp fails, the email still sends. WhatsApp errors are logged but don't break the form submission.

### 2. WhatsApp Group Link

**Location**: Contact page, below the form

**Link**: `https://chat.whatsapp.com/JxrkoHpUvde0zE5tKumptH`

**Behavior**: Opens WhatsApp group invite link in new tab

**Note**: This is a manual link - users choose to join

### 3. Floating WhatsApp Button

**Location**: Fixed position, bottom-right of all pages

**Function**: Opens WhatsApp chat with admin number

**Prefilled Message**: "Hi GENSOFT AI LABS, I want to discuss a project."

**Admin Number**: `+91 88618 36384` (configured in `components/WhatsAppButton.tsx`)

## Testing

### Test WhatsApp Alert

1. Submit the contact form on your website
2. Check your WhatsApp for the notification
3. Verify all information is correct

### Test Group Link

1. Go to Contact page
2. Click "Join WhatsApp Group" button
3. Verify it opens WhatsApp with group invite

### Test Floating Button

1. Navigate to any page
2. Click the green WhatsApp button (bottom-right)
3. Verify it opens WhatsApp chat with prefilled message

## Troubleshooting

### WhatsApp Alert Not Sending

1. **Check Environment Variables**: Ensure all Twilio variables are set in `.env.local`
2. **Check Twilio Console**: Verify your account is active and has credits
3. **Check Sandbox**: Ensure you've joined the Twilio WhatsApp sandbox
4. **Check Logs**: Look for WhatsApp errors in server console
5. **Verify Number Format**: Numbers must be in format `whatsapp:+[country code][number]`

### Common Errors

**Error: "The number provided is not a valid WhatsApp number"**
- Solution: Ensure the number includes country code and `whatsapp:` prefix
- Format: `whatsapp:+918861836384` (not `+918861836384`)

**Error: "Authentication failed"**
- Solution: Verify `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` are correct

**Error: "From number is not a valid WhatsApp-enabled number"**
- Solution: Ensure you've joined the Twilio sandbox or have an approved WhatsApp Business number

## Production Deployment

### For Vercel

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add all Twilio variables:
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN`
   - `TWILIO_WHATSAPP_FROM`
   - `ADMIN_WHATSAPP_NUMBER`
4. Redeploy your application

### Security Notes

- Never commit `.env.local` to version control (already in `.gitignore`)
- Keep Twilio credentials secure
- Use environment variables, never hardcode credentials
- Rotate credentials if compromised

## WhatsApp Policy Compliance

✅ **Compliant Features**:
- One-to-one messaging (admin alert)
- User-initiated chat (floating button)
- Manual group join (group link)
- No automated group posting
- No spam or unsolicited messages

❌ **Not Implemented** (Policy Compliant):
- Automated group messaging
- Bot responses in groups
- Mass messaging

## Cost Information

### Twilio Pricing

- **Sandbox**: Free (limited to sandbox numbers)
- **Production**: ~$0.005 per message (varies by country)
- **Free Trial**: $15.50 credit included

### Cost Estimation

- 100 contact form submissions = ~$0.50
- Very affordable for small to medium businesses

## Support

If you need help:
1. Check Twilio documentation: https://www.twilio.com/docs/whatsapp
2. Review server logs for error messages
3. Verify all environment variables are set correctly

---

**Note**: WhatsApp notifications are optional. If Twilio is not configured, the contact form will still work and send emails normally.

