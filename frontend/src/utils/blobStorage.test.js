import { put } from "@vercel/blob";
import { uploadHelloWorldBlob } from "./blobStorage";

jest.mock("@vercel/blob", () => ({
  put: jest.fn(),
}));

describe("uploadHelloWorldBlob", () => {
  it("should call put with correct arguments and return the URL", async () => {
    const mockUrl = "https://example.com/blob.txt";
    put.mockResolvedValue({ url: mockUrl });

    const url = await uploadHelloWorldBlob();

    expect(put).toHaveBeenCalledWith(
      "articles/blob.txt",
      "Hello World!",
      { access: "public" }
    );
    expect(url).toBe(mockUrl);
  });
});
