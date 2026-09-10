import { Resend } from 'resend'
import ConfirmationEmail from '../emails/ConfirmationEmail.js'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    })
  }

  try {
    const { movie, date, time } = req.body

    if (!movie || !date || !time) {
      return res.status(400).json({
        success: false,
        message: 'Missing invitation details',
      })
    }

    const { data, error } = await resend.emails.send({
      from: 'Software Engr. Molina <hello@ralphmolina.dev>',
      to: 'molinarap00@gmail.com',
      subject: 'She said yes. 🍿❤️',
      html: ConfirmationEmail({
        movie,
        date,
        time,
        posterUrl: null,
      }),
    })

    if (error) {
      console.error('Resend error:', error)

      return res.status(500).json({
        success: false,
        message: 'Failed to send email',
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Confirmation email sent',
      id: data.id,
    })
  } catch (error) {
    console.error('API error:', error)

    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
    })
  }
}