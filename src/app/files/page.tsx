"use client";

import Image from "next/image";

import useDriveList from "@/hooks/useDriveList";
import { mimeTypeFilters, sortOptions } from "../lib/definitions";

export default function FilesPage() {
  const {
    searchTerm,
    handleSearch,
    filter,
    handleFilterChange,
    sort,
    handleSortChange,
    files,
    error,
  } = useDriveList();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Files</h1>
      {error && <p className="text-red-500">{error}</p>}

      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search files..."
          value={searchTerm}
          onChange={handleSearch}
          className="border rounded p-2 flex-grow mr-2"
        />
        <select
          value={filter}
          onChange={handleFilterChange}
          className="border rounded p-2 mr-2"
        >
          {mimeTypeFilters.map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
        <select
          value={sort}
          onChange={handleSortChange}
          className="border rounded p-2"
        >
          {sortOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <ul className="space-y-4">
        {files.map((file) => (
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
                <a
                  href={`/file/${file.id}`}
                  className="text-blue-500 font-bold"
                >
                  {file.name}
                </a>
              </div>
              <div className="text-sm text-gray-600">
                Created: {new Date(file.createdTime).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">
                Owner:{" "}
                {file.owners.map((owner) => owner.emailAddress).join(", ")}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
