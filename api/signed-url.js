// api/signed-exclusive.js
import { supabaseAdmin } from '../lib/_supabaseClient.js';

export default async function handler(req, res) {
  try {
    const { file, token } = req.query;

    if (!file || !token) {
      return res.status(400).json({ ok: false, error: 'Faltan parámetros' });
    }

    const sb = supabaseAdmin();

    // Validar token en tabla exclusiva
    const { data: tokenRow, error } = await sb
      .from('exclusive_tokens')
      .select('*')
      .eq('token', token)
      .single();

    if (error || !tokenRow) {
      return res.status(403).json({ ok: false, error: 'Token inválido o expirado' });
    }

    // Verificar expiración
    if (tokenRow.expires_at && new Date() > new Date(tokenRow.expires_at)) {
      return res.status(403).json({ ok: false, error: 'Token caducado' });
    }

    // Generar signed URL desde el bucket exclusivetour
    const { data: signed, error: urlError } = await sb.storage
      .from('exclusivetour')
      .createSignedUrl(file, 60 * 15);

    if (urlError || !signed?.signedUrl) {
      return res.status(500).json({ ok: false, error: 'No se pudo generar signedUrl' });
    }

    return res.status(200).json({ ok: true, signedUrl: signed.signedUrl });

  } catch (e) {
    console.error('❌ Error en signed-exclusive:', e);
    return res.status(500).json({ ok: false, error: e.message });
  }
}

