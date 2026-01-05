import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import twilio from 'twilio'

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()
    const { name, email, phone, projectType, message } = body

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check for environment variables
    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS

    if (!emailUser || !emailPass) {
      console.error('Email credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    })

    // Format project type for display
    const projectTypeLabels: { [key: string]: string } = {
      'ai-ml': 'AI & Machine Learning',
      'data-science': 'Data Science & Analytics',
      'web-development': 'Full-Stack Web Development',
      'admin-dashboard': 'Admin Dashboard & Management',
      'hostel-mess': 'Hostel & Mess Platform',
      'ecommerce': 'Shop & Store Website',
      'business': 'Business & Advertising Website',
      'custom': 'Custom Software Development',
      'other': 'Other',
    }

    const projectTypeLabel = projectTypeLabels[projectType] || projectType

    // Escape HTML to prevent XSS while preserving line breaks
    const escapeHtml = (text: string) => {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
    }

    const escapedName = escapeHtml(name)
    const escapedEmail = escapeHtml(email)
    const escapedPhone = phone ? escapeHtml(phone) : ''
    // Escape HTML first, then convert newlines to <br> tags
    const escapedMessage = escapeHtml(message).replace(/\n/g, '<br>')

    // Email content
    const mailOptions = {
      from: `GENSOFT AI LABS <${emailUser}>`,
      to: 'ailabsgensoftx@gmail.com',
      subject: `New Project Enquiry from ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
                color: white;
                padding: 30px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: #ffffff;
                border: 1px solid #e5e7eb;
                border-top: none;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #f3f4f6;
              }
              .field:last-child {
                border-bottom: none;
                margin-bottom: 0;
                padding-bottom: 0;
              }
              .label {
                font-weight: 600;
                color: #1f2937;
                margin-bottom: 5px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .value {
                color: #4b5563;
                font-size: 16px;
              }
              .message-box {
                background: #f9fafb;
                padding: 20px;
                border-radius: 6px;
                border-left: 4px solid #3b82f6;
                margin-top: 10px;
                white-space: pre-wrap;
                font-size: 15px;
                line-height: 1.8;
                color: #1f2937;
              }
              .project-details-section {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #e5e7eb;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                text-align: center;
                color: #6b7280;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">New Project Enquiry</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">GENSOFT AI LABS</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${escapedName}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value">
                  <a href="mailto:${escapedEmail}" style="color: #3b82f6; text-decoration: none;">${escapedEmail}</a>
                </div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="label">Phone</div>
                <div class="value">
                  <a href="tel:${escapedPhone}" style="color: #3b82f6; text-decoration: none;">${escapedPhone}</a>
                </div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Project Type</div>
                <div class="value">${projectTypeLabel}</div>
              </div>
              
              <div class="project-details-section">
                <div class="label" style="font-size: 16px; margin-bottom: 15px;">Project Details</div>
                <div class="message-box">
                  ${escapedMessage}
                </div>
              </div>
              
              <div class="footer">
                <p>This email was sent from the GENSOFT AI LABS contact form.</p>
                <p><strong>Click "Reply" to respond directly to ${escapedName} at ${escapedEmail}</strong></p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Project Enquiry from ${name}

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
Project Type: ${projectTypeLabel}

PROJECT DETAILS:
${message}

---
This email was sent from the GENSOFT AI LABS contact form.
Reply directly to this email to respond to ${name} at ${email}.
      `.trim(),
    }

    // Send email to admin
    await transporter.sendMail(mailOptions)

    // Send WhatsApp notification to admin (optional - only if configured)
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID
    const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN
    const twilioWhatsAppFrom = process.env.TWILIO_WHATSAPP_FROM // Format: whatsapp:+14155238886
    const adminWhatsAppNumber = process.env.ADMIN_WHATSAPP_NUMBER // Format: whatsapp:+918861836384

    if (twilioAccountSid && twilioAuthToken && twilioWhatsAppFrom && adminWhatsAppNumber) {
      try {
        const client = twilio(twilioAccountSid, twilioAuthToken)
        
        // Create short project summary (first 100 characters)
        const projectSummary = message.length > 100 
          ? message.substring(0, 100) + '...' 
          : message

        const whatsappMessage = `🔔 New Project Enquiry

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : 'Phone: Not provided'}
Project: ${projectTypeLabel}

Summary: ${projectSummary}`

        await client.messages.create({
          from: twilioWhatsAppFrom,
          to: adminWhatsAppNumber,
          body: whatsappMessage,
        })
      } catch (whatsappError) {
        console.error('WhatsApp notification failed (non-critical):', whatsappError)
        // Don't fail the request if WhatsApp fails
        // Email delivery is the primary method, WhatsApp is optional
      }
    }

    // Send auto-reply confirmation email to user
    const autoReplyOptions = {
      from: emailUser,
      to: email,
      subject: 'Thank You for Contacting GENSOFT AI LABS',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
                color: white;
                padding: 30px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: #ffffff;
                border: 1px solid #e5e7eb;
                border-top: none;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .message {
                background: #f9fafb;
                padding: 20px;
                border-radius: 6px;
                border-left: 4px solid #3b82f6;
                margin: 20px 0;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                text-align: center;
                color: #6b7280;
                font-size: 12px;
              }
              .contact-info {
                background: #eff6ff;
                padding: 15px;
                border-radius: 6px;
                margin-top: 20px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">GENSOFT AI LABS</p>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              
              <div class="message">
                <p style="margin: 0;">Thank you for contacting <strong>GENSOFT AI LABS</strong>. We have successfully received your project enquiry and will review it carefully.</p>
              </div>
              
              <p>Our team typically responds to all enquiries <strong>within 24 hours</strong>. We'll get back to you soon to discuss your project requirements in detail.</p>
              
              <div class="contact-info">
                <p style="margin: 0 0 10px 0;"><strong>Need immediate assistance?</strong></p>
                <p style="margin: 0;">Email us directly at: <a href="mailto:ailabsgensoftx@gmail.com" style="color: #3b82f6; text-decoration: none;">ailabsgensoftx@gmail.com</a></p>
              </div>
              
              <p>We look forward to working with you on your project!</p>
              
              <p>Best regards,<br>
              <strong>The GENSOFT AI LABS Team</strong></p>
              
              <div class="footer">
                <p>This is an automated confirmation email. Please do not reply to this message.</p>
                <p>GENSOFT AI LABS - Engineering Intelligent Software</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Thank You for Contacting GENSOFT AI LABS

Dear ${name},

Thank you for contacting GENSOFT AI LABS. We have successfully received your project enquiry and will review it carefully.

Our team typically responds to all enquiries within 24 hours. We'll get back to you soon to discuss your project requirements in detail.

Need immediate assistance?
Email us directly at: ailabsgensoftx@gmail.com

We look forward to working with you on your project!

Best regards,
The GENSOFT AI LABS Team

---
This is an automated confirmation email. Please do not reply to this message.
GENSOFT AI LABS - Engineering Intelligent Software
      `.trim(),
    }

    // Send auto-reply (don't wait for it to complete)
    transporter.sendMail(autoReplyOptions).catch((err) => {
      console.error('Error sending auto-reply:', err)
      // Don't fail the main request if auto-reply fails
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}

