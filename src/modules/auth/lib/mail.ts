// resend
import { Resend } from 'resend'

// RESEND_API_KEY
const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificationEmail = async (email: string, token: string, emailMessage: string) => {
  try {
    // Verification link
    const confirmLink = `http://localhost:3000/new-verification?token=${token}`

    // Message sent to user
    await resend.emails.send({
      from: 'arrimate.team@gmail.com',
      to: email,
      subject: emailMessage,
      html: `<p>Click <a href='${confirmLink}'>here</a> to confirm your registration.</p>`
    })
  } catch (error) {
    //
    if (error instanceof Error) {
      console.error(`Failed to send verification email to ${email}: `, error)
      throw new Error(`Email sending failed: ${error.message}`)
    } else {
      console.error(
        `Unknown error while sending verification email to ${email}: `,
        error
      )
      throw new Error('Email sending failed due to an unknown error')
    }
  }
}
