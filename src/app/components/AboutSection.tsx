"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <>
      <section id="about" className="w-full py-20 sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-4">
          <div className="transition-all duration-500 ease-out motion-reduce:duration-300 translate-y-0 opacity-100 motion-reduce:translate-y-0 mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("about.heading")}
            </h2>
          </div>
          <div className="transition-all duration-500 ease-out motion-reduce:duration-300 translate-y-0 opacity-100 motion-reduce:translate-y-0 mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center" style={{"transitionDelay":"100ms"}}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("about.bio")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
