"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <>
      <footer className="w-full border-t border-border py-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-4 text-sm text-muted-foreground sm:flex-row">
          <span>{t("footer.copyright")}</span><span>{t("footer.role")}</span>
        </div>
      </footer>
    </>
  );
}
