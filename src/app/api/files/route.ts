import { NextRequest, NextResponse } from "next/server";
import { drive } from "@googleapis/drive";

const API_KEY = process.env.GOOGLE_DRIVE_API_KEY;
const FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID;

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const googleDrive = drive({ version: "v3", auth: API_KEY });

    // Extract query parameters
    const search = req.nextUrl.searchParams.get("search") || "";
    const sort = req.nextUrl.searchParams.get("sort") || "name";
    const filterMimeType = req.nextUrl.searchParams.get("filterMimeType") || "";

    // Construct the query string for Google Drive API
    let query = `'${FOLDER_ID}' in parents and trashed = false`;
    if (search) {
      query += ` and name contains '${search}'`;
    }

    if (filterMimeType) {
      query += ` and mimeType contains '${filterMimeType}/'`;
    }

    // Sort by name or createdTime
    const orderBy = sort === "name" ? "name" : "createdTime";

    // https://developers.google.com/drive/api/reference/rest/v3/files/list
    const response = await googleDrive.files.list({
      q: query,
      fields:
        "files(id, name, mimeType, webViewLink, webContentLink, thumbnailLink, size, createdTime, modifiedTime, description, owners)",
      orderBy,
    });

    const files = response.data.files || [];
    return NextResponse.json(files);
  } catch (error) {
    console.error("Error fetching files:", error);
    return NextResponse.json(
      { error: "Failed to fetch files" },
      { status: 500 }
    );
  }
}
