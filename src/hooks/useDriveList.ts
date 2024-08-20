import { useEffect, useState } from "react";

import {
  GoogleDriveFile,
  MimeTypeFilter,
  mimeTypeFilters,
  SortOption,
  sortOptions,
} from "@/app/lib/definitions";
import debounce from "@/utils/debounce";

const DEFAULT_FILTER: MimeTypeFilter = "all";
const DEFAULT_SORT: SortOption = "name";
const SEARCH_DEBOUNCE_TIME = 2000;

export default function useDriveList() {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<GoogleDriveFile[]>([]);
  const [error, setError] = useState<string>();
  const [searchTerm, setSearchTerm] = useState<string>();
  const [hiddenSearchTerm, setHiddenSearchTerm] = useState<string>(); // debounced search term
  const [filter, setFilter] = useState<MimeTypeFilter>(DEFAULT_FILTER);
  const [sort, setSort] = useState<SortOption>(DEFAULT_SORT);

  useEffect(() => {
    const getFiles = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();
        if (hiddenSearchTerm) queryParams.append("search", hiddenSearchTerm);
        if (filter && filter !== "all")
          queryParams.append("filterMimeType", filter);
        if (sort) queryParams.append("sort", sort);

        const response = await fetch(`/api/files?${queryParams.toString()}`);
        if (!response.ok) {
          throw new Error("Failed to fetch files");
        }
        const filesList = await response.json();
        setFiles(filesList);
        setError(undefined);
      } catch (error) {
        setError((error as Error)?.message);
      } finally {
        setLoading(false);
      }
    };

    getFiles();
  }, [hiddenSearchTerm, filter, sort]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    debounce(
      () => setHiddenSearchTerm(event.target.value),
      SEARCH_DEBOUNCE_TIME
    )();
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = event.target.value as MimeTypeFilter;
    if (mimeTypeFilters.includes(newFilter)) {
      setFilter(newFilter);
    }
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = event.target.value as SortOption;
    if (sortOptions.includes(newSort)) {
      setSort(newSort);
    }
  };

  return {
    loading,
    searchTerm,
    handleSearch,
    filter,
    handleFilterChange,
    sort,
    handleSortChange,
    files,
    error,
  };
}
