import { GoogleDriveFile } from "@/app/lib/definitions";
import FileListItem from "./FileListItem";
import { useTranslations } from "next-intl";

export interface FileListProps {
  files: GoogleDriveFile[];
  loading?: boolean;
}

export default function FileList({ files, loading }: FileListProps) {
  const t = useTranslations();

  if (loading) {
    return <p className="text-center text-gray-500">{t("FileList.loading")}</p>;
  }
  return (
    <div>
      {files.length === 0 ? (
        <p className="text-center text-gray-500">{t("FileList.missing")}</p>
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
