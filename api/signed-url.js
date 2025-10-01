// api/signed-url.js
import { supabaseAdmin } from '../lib/_supabaseClient.js';

export default async function handler(req, res) {
  try {
    const { file, token } = req.query;

    if (!file || !token) {
      return res.status(400).json({ ok: false, error: 'Faltan parámetros' });
    }

    const sb = supabaseAdmin();

    // Validar token
    const { data: tokenRow, error } = await sb
      .from('exclusive_tokens') // 👈 usamos tu tabla exclusiva
      .select('*')
      .eq('token', token)
      .maybeSingle();

    if (error) {
      console.error("❌ Error consultando tokens:", error);
      return res.status(500).json({ ok: false, error: 'Error interno al consultar tokens' });
    }

    if (!tokenRow) {
      return res.status(403).json({ ok: false, error: 'Token inválido' });
    }

    // Verificar expiración
    if (tokenRow.expires_at && new Date() > new Date(tokenRow.expires_at)) {
      return res.status(403).json({ ok: false, error: 'Token caducado' });
    }

    // Generar signed URL desde el bucket exclusivetour
    const { data: signed, error: urlError } = await sb.storage
      .from('exclusivetour') // 👈 tu bucket real
      .createSignedUrl(file, 60 * 15);

    if (urlError) {
      console.error("❌ Error generando signed URL:", urlError);
      return res.status(500).json({ ok: false, error: 'No se pudo generar signedUrl' });
    }

    if (!signed?.signedUrl) {
      return res.status(404).json({ ok: false, error: 'Archivo no encontrado en el bucket' });
    }

    return res.status(200).json({ ok: true, signedUrl: signed.signedUrl });

  } catch (e) {
    console.error('❌ Error en signed-url:', e);
    return res.status(500).json({ ok: false, error: 'Error interno del servidor' });
  }
}

