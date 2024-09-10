export async function getMediaContent() {
  const res = await fetch(`http://localhost:8000/videos`)
  const data = await res.json()
  return data
}
