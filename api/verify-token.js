// api/verify-token.js
import { supabaseAdmin } from '../lib/_supabaseClient.js';

export default async function handler(req, res) {
  try {
    const token = req.query.token?.toString();
    if (!token) {
      return res.status(400).json({ ok: false, error: 'Falta token' });
    }

    const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString().split(',')[0].trim();
    const ua = (req.headers['user-agent'] || '').toString();

    const sb = supabaseAdmin();
    const { data: row, error } = await sb
      .from('exclusive_tokens') // 👈 usamos tu tabla exclusiva
      .select('*')
      .eq('token', token)
      .maybeSingle(); // evita error si no existe

    if (error) {
      console.error("❌ Error consultando tokens:", error);
      return res.status(500).json({ ok: false, error: 'Error interno al consultar tokens' });
    }

    if (!row) {
      return res.status(403).json({ ok: false, error: 'Token inválido' });
    }

    const now = new Date();

    // Verificar expiración
    if (row.expires_at && now > new Date(row.expires_at)) {
      return res.status(403).json({ ok: false, error: 'Token caducado' });
    }

    // Primer uso → activar por 31 días
    if (!row.first_use) {
      await sb.from('exclusive_tokens').update({
        first_use: now.toISOString(),
        expires_at: new Date(now.getTime() + 31 * 24 * 60 * 60 * 1000).toISOString(),
        first_ip: ip,
        first_user_agent: ua
      }).eq('id', row.id);

      return res.json({ ok: true, msg: "Token activado y válido" });
    }

    // Segundo uso → validar que sea mismo dispositivo/navegador
    if (row.first_ip !== ip || row.first_user_agent !== ua) {
      return res.status(403).json({ ok: false, error: 'Token ya usado en otro dispositivo/navegador' });
    }

    return res.json({ ok: true, msg: "Token válido" });

  } catch (e) {
    console.error("❌ Error en verify-token:", e);
    return res.status(500).json({ ok: false, error: 'Error interno del servidor' });
  }
}
