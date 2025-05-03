import { put } from "@vercel/blob";

/**
 * Uploads a file to Vercel Blob storage.
 * @param {string} path - The path where the file will be stored (e.g., 'articles/blob.txt').
 * @param {string|Blob|Buffer} content - The content of the file to upload.
 * @param {Object} options - Additional options for the upload (e.g., access level).
 * @returns {Promise<string>} - The URL of the uploaded file.
 */
export async function uploadFile(path, content, options = { access: 'public' }) {
  const { url } = await put(path, content, options);
  return url;
}
