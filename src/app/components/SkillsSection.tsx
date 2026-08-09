"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function SkillsSection() {
  const { t } = useLanguage();
  return (
    <>
      <section id="skills" className="w-full py-20 sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-4">
          <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("skills.heading")}
            </h2>
          </div>
          
          <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 mb-16" style={{"transitionDelay":"100ms"}}>
            <h3 className="mb-1 text-center text-lg font-semibold">
              {t("skills.tools.heading")}
            </h3>
            <br />
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
              
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-card text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-git size-6">
                    <path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    <path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    <path d="M12 15v-6"></path>
                    <path d="M15 11l-2 -2"></path>
                    <path d="M11 7l-1.9 -1.9"></path>
                    <path d="M10.5 20.4l-6.9 -6.9c-.781 -.781 -.781 -2.219 0 -3l6.9 -6.9c.781 -.781 2.219 -.781 3 0l6.9 6.9c.781 .781 .781 2.219 0 3l-6.9 6.9c-.781 .781 -2.219 .781 -3 0z"></path>
                  </svg>
                </span>
                <span className="text-xs font-medium whitespace-nowrap">Git</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-card text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github size-6">
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </span>
                <span className="text-xs font-medium whitespace-nowrap">GitHub</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-card text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-api size-6">
                    <path d="M4 13h5"></path>
                    <path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3"></path>
                    <path d="M20 8v8"></path>
                    <path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5"></path>
                  </svg>
                </span>
                <span className="text-xs font-medium whitespace-nowrap">Postman</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-card text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-robot size-6">
                    <path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                    <path d="M12 2v2"></path>
                    <path d="M9 12v9"></path>
                    <path d="M15 12v9"></path>
                    <path d="M5 16l4 -2"></path>
                    <path d="M15 14l4 2"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 8v.01"></path>
                    <path d="M14 8v.01"></path>
                  </svg>
                </span>
                <span className="text-xs font-medium whitespace-nowrap">Playwright</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-card text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-docker size-6">
                    <path d="M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.041 1.04 -3.477 1.04h-11.233a1.002 1.002 0 0 0 -.327 .055c-.563 .157 -.93 .701 -.814 1.258c.22 1.053 1.006 2.053 2.37 2.053c.966 0 1.956 -.731 2.502 -1.543c.488 -.005 .985 -.055 1.503 -.055c1.439 0 2.946 .618 3.522 1.638c.552 1.034 1.488 1.644 2.525 1.644c1.688 0 2.82 -1.168 2.82 -2.57c0 -1.155 -.665 -1.986 -1.57 -2.443z"></path>
                    <path d="M5 10h3v3h-3z"></path>
                    <path d="M8 10h3v3h-3z"></path>
                    <path d="M11 10h3v3h-3z"></path>
                    <path d="M8 7h3v3h-3z"></path>
                    <path d="M11 7h3v3h-3z"></path>
                    <path d="M11 4h3v3h-3z"></path>
                    <path d="M4.571 18c1.5 0 2.047 -.074 2.958 -.78"></path>
                    <path d="M10 16v.01"></path>
                  </svg>
                </span>
                <span className="text-xs font-medium whitespace-nowrap">Docker</span>
              </div>

              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-card text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-vscode size-6">
                    <path d="M16 3v18l4 -2.5v-13z"></path>
                    <path d="M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v22l-8.15 -7.263"></path>
                    <path d="M16 16.5l-11 -10l-2 1l13 13.5"></path>
                  </svg>
                </span>
                <span className="text-xs font-medium whitespace-nowrap">VS Code</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-card text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-visual-studio size-6">
                    <path d="M4 8l2 -1l10 13l4 -2v-12l-4 -2l-10 13l-2 -1z"></path>
                  </svg>
                </span>
                <span className="text-xs font-medium whitespace-nowrap">Visual Studio</span>
              </div>
              
            </div>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 min-w-0 rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 font-semibold">
                {t("skills.languages")}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">C#</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Python</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Java</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">GO</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">C++</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">C</span>
              </div>
            </div>
            
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 min-w-0 rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"70ms"}}>
              <h3 className="mb-4 font-semibold">
                {t("skills.backend")}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">ASP.NET Core (MVC & Web API)</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Minimal APIs</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">RESTful APIs</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">JWT</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Django REST Framework</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">FastAPI</span>
              </div>
            </div>
            
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 min-w-0 rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"140ms"}}>
              <h3 className="mb-4 font-semibold">
                {t("skills.databases")}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">SQL Server</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">PostgreSQL</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">MySQL</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Relational Databases</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Entity Framework Core</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">LINQ</span>
              </div>
            </div>
            
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 min-w-0 rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"210ms"}}>
              <h3 className="mb-4 font-semibold">
                {t("skills.cs")}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Data Structures & Algorithms</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">OOP</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Operating Systems</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Networking</span>
              </div>
            </div>
            
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 min-w-0 rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"280ms"}}>
              <h3 className="mb-4 font-semibold">
                {t("skills.design")}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Design Patterns</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">SOLID Principles</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Object-Oriented Design</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Clean Architecture</span>
              </div>
            </div>

            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 min-w-0 rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"350ms"}}>
              <h3 className="mb-4 font-semibold">
                {t("skills.frontend")}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">HTML</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">CSS</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">JavaScript</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
