export type SearchInputProps = {
  searchTerm?: string;
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.HTMLProps<HTMLInputElement>;

export default function SearchInput({
  searchTerm,
  onSearchChange,
  ...props
}: SearchInputProps) {
  return (
    <input
      {...props}
      type="text"
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
}
