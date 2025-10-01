// api/verify-exclusive.js
import { supabaseAdmin } from '../lib/_supabaseClient.js';

export default async function handler(req, res) {
  try {
    const token = req.query.token?.toString();
    if (!token) return res.status(400).json({ ok: false, error: 'Falta token' });

    const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString().split(',')[0].trim();
    const ua = (req.headers['user-agent'] || '').toString();

    const sb = supabaseAdmin();
    const { data: rows, error } = await sb
      .from('exclusive_tokens')
      .select('*')
      .eq('token', token)
      .limit(1);

    if (error) throw error;
    const row = rows?.[0];
    if (!row) return res.status(403).json({ ok: false, error: 'Token inválido' });

    const now = new Date();

    // Si ya expiró
    if (row.expires_at && now > new Date(row.expires_at)) {
      return res.status(403).json({ ok: false, error: 'Token caducado' });
    }

    // Primer uso → activar por 31 días
    if (!row.first_use) {
      await sb.from('exclusive_tokens').update({
        first_use: now.toISOString(),
        expires_at: new Date(now.getTime() + 31*24*60*60*1000).toISOString(),
        first_ip: ip,
        first_user_agent: ua
      }).eq('id', row.id);
      return res.json({ ok: true });
    }

    // Si ya fue usado → validar que sea el mismo dispositivo/navegador
    if (row.first_ip !== ip || row.first_user_agent !== ua) {
      return res.status(403).json({ ok: false, error: 'Token ya usado en otro dispositivo' });
    }

    return res.json({ ok: true });

  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  }
}


return res.json({ ok: true });
} catch (e) {
return res.status(500).json({ ok: false, error: e.message });
}
}
