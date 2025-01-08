import { Resend } from 'resend'

// Initialize Resend with the API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Dynamically obtain the application host
const HOST = process.env.APP_HOST || 'https://arrimate.vercel.app'

// Function to send a password reset email
export const sendPasswordResetEmail = async (
  email: string,
  token: string,
  emailMessage: string
) => {
  // Define the sender's email address
  const companyEmail = 'onboarding@resend.dev'

  // Construct the password reset link
  const resetLink = `${HOST}/?token=${token}`

  // Create the message content based on the keyword in the email message
  const word = 'reset'
  const messageLink = emailMessage.includes(word)
    ? `<p>Click <a href='${resetLink}'>here</a> to reset your password.</p>`
    : `<p>Hacer clic <a href='${resetLink}'>aquí</a> para reiniciar su contraseña.</p>`

  // Send the email using Resend
  await resend.emails.send({
    from: companyEmail,
    to: email,
    subject: emailMessage,
    html: messageLink
  })
}

// Function to send a verification email
export const sendVerificationEmail = async (
  email: string,
  token: string,
  emailMessage: string
) => {
  try {
    // Define the sender's email address
    const companyEmail = 'onboarding@resend.dev'

    // Construct the account verification link
    const confirmLink = `${HOST}/new-verification?token=${token}`

    // Create the message content based on the keyword in the email message
    const word = 'registration'
    const messageLink = emailMessage.includes(word)
      ? `<p>Click <a href='${confirmLink}'>here</a> to confirm your registration.</p>`
      : `<p>Hacer clic <a href='${confirmLink}'>aquí</a> para confirmar el registro.</p>`

    // Send the email using Resend
    await resend.emails.send({
      from: companyEmail,
      to: email,
      subject: emailMessage,
      html: messageLink
    })
  } catch (error) {
    // Handle predictable errors
    if (error instanceof Error) {
      console.error(`Error sending email to ${email}:`, error.message)
      throw new Error(
        'Failed to send verification email. Please try again later.'
      )
    }

    // Handle unexpected errors
    console.error(`Unexpected error for ${email}:`, error)
    throw new Error('Unexpected error occurred while sending the email.')
  }
}
