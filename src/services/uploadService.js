export async function uploadToMoe(image) {
  return await fetch('https://trace.moe/api/search', {
    method: 'POST',
    body: image.uri,
  });
}
