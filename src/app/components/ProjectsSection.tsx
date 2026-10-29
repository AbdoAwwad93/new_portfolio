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
            
            {/* Project: Parkly */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-2 font-semibold">{t("projects.parkly.name")}</h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {t("projects.parkly.desc")}
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">ASP.NET Core Web API</span>
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Firebase Cloud Messaging</span>
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">QR Code</span>
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">RESTful APIs</span>
              </div>
            </div>

            {/* Project 1: AI Test Agent */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold">{t("projects.aitest.name")}</h3>
                <a href="https://github.com/Nomad-AI-Agent/AI-Test-Agent-backend" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub Repository">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github size-5"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                </a>
              </div>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {t("projects.aitest.desc")}
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">FastAPI</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Playwright</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">AI Agent</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">LLM</span>
              </div>
            </div>
            
            {/* Project 2: Attendo */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"50ms"}}>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold">{t("projects.attendo.name")}</h3>
                <a href="https://github.com/Project-XA/BackEnd" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub Repository">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github size-5"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                </a>
              </div>
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
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold">{t("projects.ash.name")}</h3>
                <a href="https://ash-translation.co.uk/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Website">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-external-link size-5"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
                </a>
              </div>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {t("projects.ash.desc")}
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">ASP.NET Core Web API</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">.NET 8</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">EF Core</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">PostgreSQL</span>
              </div>
            </div>
            
            {/* Project 5: QuizRoom */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"200ms"}}>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold">{t("projects.quizroom.name")}</h3>
                <a href="https://github.com/AbdoAwwad93/QuizRoom-BackEnd " target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub Repository">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github size-5"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                </a>
              </div>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {t("projects.quizroom.desc")}
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Django REST Framework</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Python</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">PostgreSQL</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">RESTful APIs</span>
              </div>
            </div>
            
            {/* Project 6: Twitter Clone Web API */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"250ms"}}>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold">{t("projects.twitter.name")}</h3>
                <a href="https://github.com/AbdoAwwad93/Twitter-Clone-API " target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub Repository">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github size-5"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                </a>
              </div>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {t("projects.twitter.desc")}
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">ASP.NET Core</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Entity Framework Core</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">SQL Server</span>
              </div>
            </div>
            
            {/* Project 7: KitabKhana */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"300ms"}}>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold">{t("projects.kitabkhana.name")}</h3>
                <a href="https://github.com/AbdoAwwad93/kitabkhana" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub Repository">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github size-5"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                </a>
              </div>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {t("projects.kitabkhana.desc")}
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">ASP.NET Core MVC</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">EF Core</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">SQL Server</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Stripe Payment</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">ASP.NET Identity</span>
              </div>
            </div>
            
            {/* Project 8: RailRoads & Routes */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"350ms"}}>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold">{t("projects.railroads.name")}</h3>
                <a href="https://github.com/black301/Go-Bus-Clone" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub Repository">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github size-5"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                </a>
              </div>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {t("projects.railroads.desc")}
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">ASP.NET Core MVC</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">C#</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Entity Framework</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">SQL Server</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">ASP.NET Identity</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">SignalR</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
