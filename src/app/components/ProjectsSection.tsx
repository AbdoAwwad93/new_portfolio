"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function ProjectsSection() {
  const { t } = useLanguage();
  return (
    <>
      <section id="projects" className="w-full py-20 sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-4">
          <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("projects.heading")}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              {t("projects.subtitle")}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            
            {/* Project 1: AI Test Agent */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-2 font-semibold">{t("projects.aitest.name")}</h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {t("projects.aitest.desc")}
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">FastAPI</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Playwright</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">AI Agent</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">LLM</span>
              </div>
            </div>
            
            {/* Project 2: Attendo */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"50ms"}}>
              <h3 className="mb-2 font-semibold">{t("projects.attendo.name")}</h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {t("projects.attendo.desc")}
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">ASP.NET Core</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Entity Framework Core</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">SQL Server</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">JWT</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">RESTful APIs</span>
              </div>
            </div>
            
            {/* Project 3: Nova Clinic Management */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"100ms"}}>
              <h3 className="mb-2 font-semibold">{t("projects.nova.name")}</h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {t("projects.nova.desc")}
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">.NET 8</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">PostgreSQL</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">EF Core</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Clean Architecture</span>
              </div>
            </div>
            
            {/* Project 4: ASH Translation */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"150ms"}}>
              <h3 className="mb-2 font-semibold">{t("projects.ash.name")}</h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {t("projects.ash.desc")}
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">ASP.NET Core Web API</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">.NET 8</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">EF Core</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">PostgreSQL</span>
              </div>
            </div>
            
            {/* Project 5: QuizRoom */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"200ms"}}>
              <h3 className="mb-2 font-semibold">{t("projects.quizroom.name")}</h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {t("projects.quizroom.desc")}
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Django REST Framework</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Python</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">PostgreSQL</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">RESTful APIs</span>
              </div>
            </div>
            
            {/* Project 6: Twitter Clone Web API */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"250ms"}}>
              <h3 className="mb-2 font-semibold">{t("projects.twitter.name")}</h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {t("projects.twitter.desc")}
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">ASP.NET Core</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Entity Framework Core</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">SQL Server</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
