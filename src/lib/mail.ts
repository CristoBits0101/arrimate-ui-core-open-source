import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificationEmail = async (email: string, token: string) => {
  try {
    //
    const confirmLink = `http://localhost:3000/new-verification?token=${token}`

    //
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Confirm your Email',
      html: `<p>Click <a href='${confirmLink}'>here</a> to confirm your email.</p>`
    })
  } catch (error) {
    //
    if (error instanceof Error) {
      console.error(`Failed to send verification email to ${email}:`, error)
      throw new Error(`Email sending failed: ${error.message}`)
    } else {
      console.error(
        `Unknown error while sending verification email to ${email}:`,
        error
      )
      throw new Error('Email sending failed due to an unknown error')
    }
  }
}
