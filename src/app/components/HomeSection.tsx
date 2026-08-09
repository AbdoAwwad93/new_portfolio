"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function HomeSection() {
  const { t } = useLanguage();
  return (
    <>
      <section id="home" className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-24 text-center">
        <div className="hero-intro hero-intro-1 mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-1.5 text-sm text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-terminal-2 size-4">
            <path d="M8 9l3 3l-3 3"></path>
            <path d="M13 15l3 0"></path>
            <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path></svg>{t("home.title")}
        </div>
        <div className="hero-intro hero-intro-2">
          <h1 className="thmanyah-swash text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"><span className="text-primary">{t("home.name")}</span></h1>
        </div>
        <p className="hero-intro hero-intro-3 thmanyah-swash mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl">
          {t("home.intro")}
        </p>
        <div className="hero-intro hero-intro-4 mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#projects" role="button" tabIndex={0} data-slot="button" className="group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 bg-primary text-primary-foreground hover:bg-primary/80 h-10 gap-1.5 px-2.5 z-50">{t("home.cta.projects")}</a><a href="https://drive.google.com/file/d/1qnnc0oo9iajYdRA9-f1PtEpAcDs_fPX5/view?usp=sharing" target="_blank" rel="noopener noreferrer" role="button" tabIndex={0} data-slot="button" className="group/button inline-flex shrink-0 items-center justify-center rounded-md border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 border-border bg-background shadow-xs hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 h-10 gap-1.5 px-2.5 z-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-download size-4">
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
            <path d="M7 11l5 5l5 -5"></path>
            <path d="M12 4l0 12"></path></svg>{t("home.cta.cv")}</a>
        </div>
        <a href="#about" className="hero-intro hero-intro-5 mt-20 flex flex-col items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">{t("home.scrollDown")}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-arrow-down size-4 animate-bounce">
            <path d="M12 5l0 14"></path>
            <path d="M18 13l-6 6"></path>
            <path d="M6 13l6 6"></path></svg></a>
      </section>
    </>
  );
}
