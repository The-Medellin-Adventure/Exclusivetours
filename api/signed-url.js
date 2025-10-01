// api/signed-url.js
import { supabaseAdmin } from '../lib/_supabaseClient.js';

export default async function handler(req, res) {
  try {
    const { file, token } = req.query;

    if (!file || !token) {
      return res.status(400).send("❌ Faltan parámetros");
    }

    const sb = supabaseAdmin();

    // Validar token en exclusive_tokens
    const { data: tokenRow, error } = await sb
      .from('exclusive_tokens')
      .select('*')
      .eq('token', token)
      .maybeSingle();

    if (error) {
      console.error("❌ Error consultando tokens:", error);
      return res.status(500).send("Error interno al validar token");
    }

    if (!tokenRow) {
      return res.status(403).send("Token inválido");
    }

    if (tokenRow.expires_at && new Date() > new Date(tokenRow.expires_at)) {
      return res.status(403).send("Token caducado");
    }

    // Generar signed URL
    const { data: signed, error: urlError } = await sb.storage
      .from('exclusivetour')  // 👈 bucket nuevo
      .createSignedUrl(file, 60 * 15); // expira en 15 min

    if (urlError || !signed?.signedUrl) {
      console.error("❌ Error generando signed URL:", urlError, "Archivo:", file);
      return res.status(404).send("Archivo no encontrado en el bucket");
    }

    // ✅ Redirigir al recurso firmado
    return res.redirect(302, signed.signedUrl);

  } catch (e) {
    console.error('❌ Error en signed-url:', e);
    return res.status(500).send("Error interno del servidor");
  }
}
