export async function onRequestGet() {
  return new Response(
    JSON.stringify({
      status: "ok",
      service: "citybyplate",
      timestamp: new Date().toISOString()
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "no-store"
      }
    }
  );
}