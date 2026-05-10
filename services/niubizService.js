import axios from 'axios';

// Exportar como función nombrada
export async function validarTransaccion(data) {
  try {
    // Aquí puedes hacer la validación real con Niubiz usando sus APIs
    return { success: data.success };
  } catch (error) {
    console.error("Error validando con Niubiz:", error);
    return { success: false };
  }
}
