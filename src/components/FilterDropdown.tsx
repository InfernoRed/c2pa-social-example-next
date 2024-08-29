import { useTranslations } from "next-intl";

import { MimeTypeFilter } from "@/app/lib/definitions";

export type FilterDropdownProps = {
  filter: MimeTypeFilter;
  filters: readonly MimeTypeFilter[];
  onFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
} & React.HTMLProps<HTMLSelectElement>;

export default function FilterDropdown({
  filter,
  filters,
  onFilterChange,
  ...props
}: FilterDropdownProps) {
  const t = useTranslations();

  return (
    <select {...props} value={filter} onChange={onFilterChange}>
      {filters.map((filter) => (
        <option key={filter} value={filter}>
          {t(`FilterDropdown.filters.${filter}`)}
        </option>
      ))}
    </select>
  );
}
