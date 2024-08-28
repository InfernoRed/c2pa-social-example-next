"use client";

import { useTranslations } from "next-intl";

import { mimeTypeFilters, sortOptions } from "@/app/lib/definitions";
import { FileList } from "@/components/FileList";
import FilterDropdown from "@/components/FilterDropdown";
import SortDropdown from "@/components/SortDropdown";
import SearchInput from "@/components/SearchInput";
import useDriveList from "@/hooks/useDriveList";

export default function FilesPage() {
  const t = useTranslations();
  const {
    loading,
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
      <h1 className="text-2xl font-bold mb-4">{t("FileListPage.heading")}</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex items-center mb-4">
        <SearchInput
          placeholder={t("FileListPage.searchPlaceholder")}
          searchTerm={searchTerm}
          onSearchChange={handleSearch}
          className="border rounded p-2 flex-grow mr-2"
        />
        <FilterDropdown
          filter={filter}
          filters={mimeTypeFilters}
          onFilterChange={handleFilterChange}
          className="border rounded p-2 mr-2"
        />
        <SortDropdown
          sort={sort}
          options={sortOptions}
          onSortChange={handleSortChange}
          className="border rounded p-2"
        />
      </div>
      <FileList files={files} loading={loading} />
    </div>
  );
}
