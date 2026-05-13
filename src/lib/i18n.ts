import { useEffect, useState, useCallback } from "react";
import { en } from "@/locales/en";
import { vi } from "@/locales/vi";

export type Lang = "en" | "vi";
const dicts = { en, vi } as const;

const LANG_KEY = "vg.lang";
const EVT = "vg:lang-change";

export const getLang = (): Lang => {
  if (typeof window === "undefined") return "en";
  const v = localStorage.getItem(LANG_KEY);
  return v === "vi" ? "vi" : "en";
};

export const setLangGlobal = (l: Lang) => {
  localStorage.setItem(LANG_KEY, l);
  window.dispatchEvent(new CustomEvent(EVT, { detail: l }));
  document.documentElement.lang = l;
};

const resolve = (dict: Record<string, unknown>, key: string): string => {
  const out = key.split(".").reduce<unknown>(
    (acc, part) => (acc && typeof acc === "object" ? (acc as Record<string, unknown>)[part] : undefined),
    dict,
  );
  return typeof out === "string" ? out : key;
};

export const useT = () => {
  const [lang, setLangState] = useState<Lang>(getLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    const handler = (e: Event) => {
      const next = (e as CustomEvent<Lang>).detail;
      setLangState(next);
    };
    window.addEventListener(EVT, handler);
    return () => window.removeEventListener(EVT, handler);
  }, [lang]);

  const t = useCallback(
    (key: string) => resolve(dicts[lang] as Record<string, unknown>, key),
    [lang],
  );

  const toggle = useCallback(() => {
    setLangGlobal(lang === "en" ? "vi" : "en");
  }, [lang]);

  return { t, lang, setLang: setLangGlobal, toggle };
};
