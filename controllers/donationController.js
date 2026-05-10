import axios from 'axios';
import { validarTransaccion } from '../services/niubizService.js';
import { enviarCorreoDonacion } from '../services/emailService.js';

// Controlador para manejar la respuesta de Niubiz
export async function success(req, res) {
  try {
    const data = req.body;

    const validacion = await validarTransaccion(data);

    if (validacion.success) {
      const emailDonante = data.email || "donante@ejemplo.com";
      const monto = data.amount;

      enviarCorreoDonacion(emailDonante, monto);
      res.send("¡Gracias por tu donación!");
    } else {
      res.status(400).send("Error en la transacción");
    }
  } catch (error) {
    console.error("Error en controlador:", error);
    res.status(500).send("Error interno del servidor");
  }
}

// Controlador para generar el token de sesión

export async function getToken(req, res) {
  try {
    const auth = Buffer.from(
      process.env.NIUBIZ_USER + ':' + process.env.NIUBIZ_PASSWORD
    ).toString('base64');

    const respuesta = await axios.post(
      'https://apisandbox.vnforappstest.com/api.security/v1/security',
      {},
      {
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json({ sessionKey: respuesta.data });
// console.log("Auth header:", `Basic ${auth}`);
// console.log("Respuesta Niubiz:", respuesta.data);
console.log(response.data);

  } catch (error) {
    console.error("Error generando token:", error.response?.data || error);
    res.status(500).json({ error: "Error generando token" }); // ✅ devuelve JSON
  }
}