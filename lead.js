// This runs on Vercel's server. It simply records each email that comes in
// so you have a record of leads, viewable under this project's
// Deployments → (latest) → Logs in Vercel.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { email } = req.body || {};

  if (!email) {
    return res.status(400).json({ ok: false, error: 'Missing email' });
  }

  // This line is what shows up in Vercel's logs — that's how you'll see leads.
  console.log(`NEW LEAD: ${email} at ${new Date().toISOString()}`);

  return res.status(200).json({ ok: true });
}
