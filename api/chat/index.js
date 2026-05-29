export default function handler(req, res) {
  const log = {
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url,
    userAgent: req.headers["user-agent"] || "unknown",
    forwardedFor: req.headers["x-forwarded-for"] || "unknown"
  };

  console.log(JSON.stringify(log, null, 2));

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
    <body>
      <h1>Bugbounty POC by @nvk0x</h1>
    </body>
    </html>
  `);
}
