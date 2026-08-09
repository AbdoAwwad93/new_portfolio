"use client";

import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../i18n/LanguageContext";

export default function Header() {
  const { t, toggleLanguage } = useLanguage();
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-transparent bg-background/0 backdrop-blur-sm transition-colors duration-300 ease-out">
        <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4">
          <a className="rounded-md px-2 py-1.5 font-semibold tracking-tight hover:bg-muted dark:hover:bg-muted/50" href="/#home">{t("nav.name")}</a>
          <div className="hidden items-center gap-1 lg:flex">
            <a role="button" tabIndex={0} data-slot="button" className="group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5" href="/#home">{t("nav.home")}</a>
            <a role="button" tabIndex={0} data-slot="button" className="group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5" href="/#about">{t("nav.about")}</a>
            <a role="button" tabIndex={0} data-slot="button" className="group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5" href="/#experience">{t("nav.experience")}</a>
            <a role="button" tabIndex={0} data-slot="button" className="group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5" href="/#skills">{t("nav.skills")}</a>
            <a role="button" tabIndex={0} data-slot="button" className="group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5" href="/#education">{t("nav.education")}</a>
            <a role="button" tabIndex={0} data-slot="button" className="group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5" href="/#projects">{t("nav.projects")}</a>
            <a role="button" tabIndex={0} data-slot="button" className="group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5" href="/#contact">{t("nav.contact")}</a>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button type="button" tabIndex={0} data-slot="button" onClick={toggleLanguage} className="group/button shrink-0 items-center justify-center border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 border-border bg-background shadow-xs hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 h-8 gap-1 px-2.5 hidden rounded-full sm:inline-flex cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-language size-4">
                <path d="M9 6.371c0 4.418 -2.239 6.629 -5 6.629"></path>
                <path d="M4 6.371h7"></path>
                <path d="M5 9c0 2.144 2.252 3.908 6 4"></path>
                <path d="M12 20l4 -9l4 9"></path>
                <path d="M19.1 18h-6.2"></path>
                <path d="M6.694 3l.793 .582"></path></svg>{t("nav.langButton")}
            </button>
            <div className="lg:hidden">
              <button type="button" tabIndex={0} data-slot="button" aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle menu" className="group/button inline-flex shrink-0 items-center justify-center rounded-md border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 border-border bg-background shadow-xs hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 size-9">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-menu-2 size-4.5">
                  <path d="M4 6l16 0"></path>
                  <path d="M4 12l16 0"></path>
                  <path d="M4 18l16 0"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
