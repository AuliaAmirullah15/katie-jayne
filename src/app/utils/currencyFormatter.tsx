type Currency = "USD" | "GBP" | "EUR" | "JPY";

const currencySymbols: Record<Currency, string> = {
  USD: "$",
  GBP: "£",
  EUR: "€",
  JPY: "¥",
};

export const formatCurrency = (amount: number, currency: Currency): string => {
  const symbol = currencySymbols[currency] || "";
  return `${symbol}${amount.toFixed(2)}`;
};

export const formatDouble = (value: number): string => {
  return value.toFixed(2);
};
