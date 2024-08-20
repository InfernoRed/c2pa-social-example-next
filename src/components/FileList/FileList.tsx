import { GoogleDriveFile } from "@/app/lib/definitions";
import FileListItem from "./FileListItem";

export interface FileListProps {
  files: GoogleDriveFile[];
  missingText: string;
}

export default function FileList({ files, missingText }: FileListProps) {
  return (
    <div>
      {files.length === 0 ? (
        <p className="text-center text-gray-500">{missingText}</p>
      ) : (
        <ul className="space-y-4">
          {files.map((file) => (
            <FileListItem key={file.id} file={file} />
          ))}
        </ul>
      )}
    </div>
  );
}
