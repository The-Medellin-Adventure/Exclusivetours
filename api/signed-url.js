// api/signed-url.js
import { supabaseAdmin } from '../lib/_supabaseClient.js';

export default async function handler(req, res) {
  try {
    const { file, token } = req.query;

    if (!file || !token) {
      return res.status(400).json({ ok: false, error: 'Faltan parámetros', file, token });
    }

    const sb = supabaseAdmin();

    // Validar token en la tabla exclusive_tokens
    const { data: tokenRow, error } = await sb
      .from('exclusive_tokens')
      .select('*')
      .eq('token', token)
      .maybeSingle();

    if (error) {
      console.error("❌ Error consultando tokens:", error);
      return res.status(500).json({ ok: false, error: error.message, step: "check-token" });
    }

    if (!tokenRow) {
      return res.status(403).json({ ok: false, error: 'Token inválido', token });
    }

    if (tokenRow.expires_at && new Date() > new Date(tokenRow.expires_at)) {
      return res.status(403).json({ ok: false, error: 'Token caducado', token });
    }

    // Generar signed URL
    const { data: signed, error: urlError } = await sb.storage
      .from('exclusivetour')   // 👈 bucket correcto
      .createSignedUrl(file, 60 * 15);

    if (urlError) {
      console.error("❌ Error generando signed URL:", urlError, "Archivo solicitado:", file);
      return res.status(500).json({ 
        ok: false, 
        error: urlError.message || "No se pudo generar signedUrl", 
        file 
      });
    }

    if (!signed?.signedUrl) {
      return res.status(404).json({ ok: false, error: 'Archivo no encontrado en el bucket', file });
    }

    return res.status(200).json({ ok: true, signedUrl: signed.signedUrl });

  } catch (e) {
    console.error('❌ Error en signed-url:', e);
    return res.status(500).json({ ok: false, error: e.message || 'Error interno del servidor' });
  }
}
