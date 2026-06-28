import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(amount: number, currency = "DZD") {
  return `${amount.toLocaleString()} ${currency}`;
}
