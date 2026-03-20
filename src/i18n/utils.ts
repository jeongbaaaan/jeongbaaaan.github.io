import { ui } from "./ui";

export type Locale = "ko" | "en" | "ja";

export const defaultLocale: Locale = "ko";
export const locales: Locale[] = ["ko", "en", "ja"];

export function getLocaleFromUrl(url: URL): Locale {
  const segments = url.pathname.split("/").filter(Boolean);
  const first = segments[0] as Locale;
  if (locales.includes(first) && first !== defaultLocale) {
    return first;
  }
  return defaultLocale;
}

export function t(key: string, locale: Locale): string {
  const translations = ui[locale];
  return (translations as Record<string, string>)[key] ?? (ui[defaultLocale] as Record<string, string>)[key] ?? key;
}

export function localePath(path: string, locale: Locale): string {
  // Remove any existing locale prefix
  const cleanPath = path.replace(/^\/(en|ja)\//, "/").replace(/^\/(en|ja)$/, "/");

  if (locale === defaultLocale) {
    return cleanPath;
  }

  if (cleanPath === "/") {
    return `/${locale}/`;
  }

  return `/${locale}${cleanPath}`;
}

export function stripLocaleFromPath(path: string): string {
  return path.replace(/^\/(en|ja)\//, "/").replace(/^\/(en|ja)$/, "/");
}
