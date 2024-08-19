/**
 * Basic debounce function to prevent multiple calls to a function
 * @param callback Function to debounce
 * @param wait wait time
 * @returns
 */
export default function debounce<T extends (...args: any[]) => any>(
  callback: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): void => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      callback(...args);
    }, wait);
  };
}
