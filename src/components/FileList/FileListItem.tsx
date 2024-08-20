import { GoogleDriveFile } from "@/app/lib/definitions";
import Image from "next/image";

export type FileListItemProps = {
  file: GoogleDriveFile;
};

export default function FileListItem({ file }: FileListItemProps) {
  return (
    <li key={file.id} className="flex items-center border p-4 rounded">
      <div className="mr-4">
        <Image
          src={file.thumbnailLink}
          alt={file.name}
          width="80"
          height="80"
          className="w-20 h-20 object-cover rounded"
        />
      </div>
      <div className="flex-grow">
        <div>
          <a href={`/file/${file.id}`} className="text-blue-500 font-bold">
            {file.name}
          </a>
        </div>
        <div className="text-sm text-gray-600">
          Created: {new Date(file.createdTime).toLocaleString()}
        </div>
        <div className="text-sm text-gray-600">
          Owner: {file.owners.map((owner) => owner.emailAddress).join(", ")}
        </div>
      </div>
    </li>
  );
}
