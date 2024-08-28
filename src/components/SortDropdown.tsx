import { useTranslations } from "next-intl";

import { SortOption } from "@/app/lib/definitions";

export type FilterDropdownProps = {
  sort: SortOption;
  options: readonly SortOption[];
  onSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
} & React.HTMLProps<HTMLSelectElement>;

export default function SortDropdown({
  sort,
  options,
  onSortChange,
  ...props
}: FilterDropdownProps) {
  const t = useTranslations();

  return (
    <select {...props} value={sort} onChange={onSortChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {t(`SortDropdown.options.${option}`)}
        </option>
      ))}
    </select>
  );
}
