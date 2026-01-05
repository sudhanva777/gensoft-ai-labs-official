# WhatsApp Admin Alert - Test Checklist

Use this checklist to verify WhatsApp integration is working correctly.

## Pre-Testing Setup

- [ ] Twilio account created at https://console.twilio.com/
- [ ] Email verified in Twilio account
- [ ] Phone number verified in Twilio account
- [ ] WhatsApp sandbox joined (sent join code to Twilio number)
- [ ] Received confirmation message in WhatsApp
- [ ] Account SID copied from Twilio Console
- [ ] Auth Token copied from Twilio Console (clicked "View" to reveal)
- [ ] `.env.local` file created in project root
- [ ] All 4 Twilio variables added to `.env.local`:
  - [ ] `TWILIO_ACCOUNT_SID=AC...`
  - [ ] `TWILIO_AUTH_TOKEN=...`
  - [ ] `TWILIO_WHATSAPP_FROM=whatsapp:+14155238886`
  - [ ] `ADMIN_WHATSAPP_NUMBER=whatsapp:+918861836384`
- [ ] Phone number format verified (includes `whatsapp:` prefix and country code)
- [ ] Development server restarted after adding variables

## Test 1: Basic Functionality

**Test Form Submission**:
- [ ] Navigate to http://localhost:3000/contact
- [ ] Fill out contact form with test data
- [ ] Submit the form
- [ ] Form shows success message
- [ ] No errors displayed to user

**Verify Email Delivery**:
- [ ] Check email inbox (ailabsgensoftx@gmail.com)
- [ ] Email received successfully
- [ ] Email contains all form data
- [ ] Email is properly formatted

**Verify WhatsApp Alert**:
- [ ] Check WhatsApp on admin phone
- [ ] WhatsApp message received
- [ ] Message contains client name
- [ ] Message contains client email
- [ ] Message contains phone number (or "Not provided")
- [ ] Message contains project type
- [ ] Message contains summary (first 100 chars)
- [ ] Message format is clear and readable

## Test 2: Message Content Verification

**WhatsApp Message Should Include**:
- [ ] 🔔 emoji at start
- [ ] "New Project Enquiry" header
- [ ] Client name (exact from form)
- [ ] Client email (exact from form)
- [ ] Phone number (exact from form, or "Not provided")
- [ ] Project type (formatted label, not code)
- [ ] Summary (first 100 characters of message)

**Example Expected Message**:
```
🔔 New Project Enquiry

Name: Test User
Email: test@example.com
Phone: +91 12345 67890
Project: AI & Machine Learning

Summary: This is a test message to verify WhatsApp integration...
```

## Test 3: Error Handling

**Test WhatsApp Failure (Non-Breaking)**:
- [ ] Temporarily set wrong `TWILIO_ACCOUNT_SID`
- [ ] Submit contact form
- [ ] Form submission succeeds
- [ ] Email still sends successfully
- [ ] No error shown to user
- [ ] Server console shows WhatsApp error (non-critical)
- [ ] Restore correct credentials

## Test 4: Edge Cases

**Test Without Phone Number**:
- [ ] Submit form without phone number
- [ ] WhatsApp message shows "Phone: Not provided"
- [ ] Email still contains all other data

**Test Long Message**:
- [ ] Submit form with message > 100 characters
- [ ] WhatsApp summary shows first 100 chars + "..."
- [ ] Full message still in email

**Test Special Characters**:
- [ ] Submit form with special characters in name/message
- [ ] WhatsApp message displays correctly
- [ ] No encoding issues

## Test 5: Production Verification (Vercel)

**Environment Variables**:
- [ ] All 4 Twilio variables added in Vercel dashboard
- [ ] Variables match local `.env.local`
- [ ] Application redeployed after adding variables

**Production Testing**:
- [ ] Test form on live site
- [ ] WhatsApp alert received
- [ ] Email also received
- [ ] Both work correctly

## Test 6: Performance & Reliability

**Concurrent Submissions**:
- [ ] Submit 2-3 forms quickly
- [ ] All WhatsApp alerts received
- [ ] All emails received
- [ ] No duplicate messages

**Server Logs**:
- [ ] Check server console for errors
- [ ] No critical errors
- [ ] WhatsApp errors (if any) are logged as "non-critical"
- [ ] Email errors (if any) are properly handled

## Final Verification

**Complete Integration Check**:
- [ ] Email delivery works (primary)
- [ ] WhatsApp alert works (secondary)
- [ ] Both work independently
- [ ] WhatsApp failure doesn't break email
- [ ] Form submission always succeeds
- [ ] User experience is smooth
- [ ] No errors shown to users
- [ ] All data correctly formatted

## Success Criteria

✅ **All tests pass** = WhatsApp integration is working correctly!

**If any test fails**:
1. Check the troubleshooting section in `WHATSAPP_ENABLE_GUIDE.md`
2. Verify environment variables are correct
3. Check Twilio Console for account status
4. Review server logs for specific errors

---

**Test Date**: _______________
**Tested By**: _______________
**Result**: ☐ Pass  ☐ Fail
**Notes**: _________________________________________________

