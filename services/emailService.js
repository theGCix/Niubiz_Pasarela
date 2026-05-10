import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Exportar como función nombrada
export function enviarCorreoDonacion(destinatario, monto) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: destinatario,
    subject: 'Gracias por tu donación',
    text: `¡Hola! Gracias por tu aporte de $${monto}. Tu apoyo nos ayuda a seguir trabajando por nuestra causa.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error enviando correo:", error);
    } else {
      console.log("Correo enviado:", info.response);
    }
  });
}
