export type GoogleDriveFile = {
  id: string;
  name: string;
  mimeType: string;
  webViewLink: string;
  webContentLink: string;
  thumbnailLink: string;
  size: string;
  createdTime: string;
  modifiedTime: string;
  description: string;
  owners: Array<{
    kind: string;
    displayName: string;
    photoLink: string;
    me: boolean;
    permissionId: string;
    emailAddress: string;
  }>;
};

export type ErrorResponse = {
  error: string;
};

export const sortOptions = ["name", "date"] as const;

export type SortOption = (typeof sortOptions)[number];

export const mimeTypeFilters = ["image", "video", "audio", "all"] as const;

export type MimeTypeFilter = (typeof mimeTypeFilters)[number];
