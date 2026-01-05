# Email Setup Guide for Contact Form

This guide will help you configure email delivery for the GENSOFT AI LABS contact form.

## Prerequisites

- A Gmail account (ailabsgensoftx@gmail.com or any Gmail account)
- 2-Step Verification enabled on your Google Account

## Step 1: Enable 2-Step Verification

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **2-Step Verification**
3. Follow the prompts to enable 2-Step Verification (if not already enabled)

## Step 2: Generate App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **App passwords**
3. You may need to sign in again
4. Select **Mail** as the app
5. Select **Other (Custom name)** as the device
6. Enter "GENSOFT AI LABS Contact Form" as the name
7. Click **Generate**
8. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

## Step 3: Create Environment Variables File

1. In the project root directory, create a file named `.env.local`
2. Add the following content:

```env
EMAIL_USER=ailabsgensoftx@gmail.com
EMAIL_PASS=your-16-character-app-password-here
```

3. Replace `your-16-character-app-password-here` with the app password you generated (remove spaces)
4. Save the file

**Important:** The `.env.local` file is already in `.gitignore` and will not be committed to version control.

## Step 4: Restart Development Server

After creating `.env.local`, restart your Next.js development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## Step 5: Test the Contact Form

1. Navigate to http://localhost:3000/contact
2. Fill out the contact form
3. Submit the form
4. Check your email inbox (ailabsgensoftx@gmail.com) for the new message

## Troubleshooting

### Error: "Email service not configured"
- Make sure `.env.local` exists in the project root
- Verify the environment variable names are exactly `EMAIL_USER` and `EMAIL_PASS`
- Restart the development server after creating/updating `.env.local`

### Error: "Invalid login credentials"
- Double-check your Gmail address in `EMAIL_USER`
- Verify you're using an App Password, not your regular Gmail password
- Make sure the App Password doesn't have spaces (remove all spaces)

### Error: "Failed to send email"
- Check your internet connection
- Verify 2-Step Verification is enabled on your Google Account
- Try generating a new App Password
- Check the server console for detailed error messages

### Email not received
- Check your spam/junk folder
- Verify the email address in `EMAIL_USER` is correct
- Check the server console logs for any errors

## For Production (Vercel Deployment)

When deploying to Vercel:

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add the following variables:
   - `EMAIL_USER` = your Gmail address
   - `EMAIL_PASS` = your Gmail App Password
4. Redeploy your application

## Security Notes

- Never commit `.env.local` to version control (already in `.gitignore`)
- Never share your App Password publicly
- App Passwords are safer than using your main Gmail password
- Each App Password can be revoked individually if compromised

## Email Format

The contact form sends emails with:
- **Subject:** "New Project Enquiry – GENSOFT AI LABS"
- **To:** ailabsgensoftx@gmail.com
- **Reply-To:** The sender's email address (so you can reply directly)
- **Content:** Formatted HTML email with all form fields

---

Need help? Check the server console logs for detailed error messages.

