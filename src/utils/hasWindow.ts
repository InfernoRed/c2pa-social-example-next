export default function hasWindow(): boolean {
  return window !== undefined && typeof window !== "undefined";
}
