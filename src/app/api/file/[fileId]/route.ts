import { NextRequest, NextResponse } from "next/server";
import { drive } from "@googleapis/drive";

const API_KEY = process.env.GOOGLE_DRIVE_API_KEY;

export async function GET(
  _req: NextRequest,
  { params }: { params: { fileId: string } }
) {
  const { fileId } = params;

  try {
    const googleDrive = drive({ version: "v3", auth: API_KEY });

    // https://developers.google.com/drive/api/reference/rest/v3/files/get
    const response = await googleDrive.files.get({
      fileId,
      fields:
        "id, name, mimeType, webViewLink, webContentLink, thumbnailLink, size, createdTime, modifiedTime, description, owners, imageMediaMetadata",
    });

    if (response.status !== 200) {
      throw Error(response.statusText, { cause: response.status });
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching file details:", error);
    return NextResponse.json(
      { error: "Failed to fetch file details" },
      { status: 500 }
    );
  }
}
