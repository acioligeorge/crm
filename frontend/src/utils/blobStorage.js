import { put } from "@vercel/blob";

export async function uploadHelloWorldBlob() {
  const { url } = await put('articles/blob.txt', 'Hello World!', { access: 'public' });
  return url;
}
