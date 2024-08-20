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
  return (
    <select {...props} value={filter} onChange={onFilterChange}>
      {filters.map((filter) => (
        <option key={filter} value={filter}>
          {filter}
        </option>
      ))}
    </select>
  );
}
