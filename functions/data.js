import plates from "../data/numberplates.json";

export async function onRequestGet() {
  return new Response(
    JSON.stringify(plates),
    {
      headers: {
        "content-type": "application/json",
        "cache-control": "public, max-age=3600"
      }
    }
  );
}