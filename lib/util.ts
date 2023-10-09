import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// @ts-ignore
export const debounce = (callback, wait) => {
  // @ts-ignore
  let timeoutId = null;
  // @ts-ignore
  return (...args) => {
    // @ts-ignore
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};