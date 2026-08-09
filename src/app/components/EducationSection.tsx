"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function EducationSection() {
  const { t } = useLanguage();
  return (
    <>
      <section id="education" className="w-full py-20 sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-4">
          <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("edu.heading")}
            </h2>
          </div>
          
          <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 mx-auto mb-10 flex max-w-3xl items-start gap-4 rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"100ms"}}>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-background"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-school size-5">
                <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
                <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path></svg></span>
            <div>
              <p className="font-semibold">{t("edu.degree")}</p>
              <p className="text-sm text-muted-foreground">
                {t("edu.university")}
              </p>
            </div>
          </div>
          
          <h3 className="mb-6 text-center text-lg font-semibold">{t("edu.certs")}</h3>
          <div className="mx-auto mb-16 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            
            <a 
              href="https://www.freecodecamp.org/certification/Abdulrahman_Awwad/foundational-c-sharp-with-microsoft" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center hover:border-foreground/30 hover:shadow-md cursor-pointer group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute top-3.5 end-3.5 size-4 text-muted-foreground opacity-60 transition-all group-hover:opacity-100 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M12 6h6v6"></path>
                <path d="M11 13l7 -7"></path>
                <path d="M18 13v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"></path>
              </svg>
              <span className="flex size-11 items-center justify-center rounded-full border border-border bg-background group-hover:border-foreground/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-certificate size-5">
                  <path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path>
                  <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path>
                  <path d="M6 9l12 0"></path>
                  <path d="M6 12l3 0"></path>
                  <path d="M6 15l2 0"></path>
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold group-hover:text-primary transition-colors" dir="ltr">
                  Foundational C#
                </p>
                <p className="mt-1 text-xs text-muted-foreground">Microsoft</p>
              </div>
            </a>
            
            <a 
              href="https://drive.google.com/file/d/1Bp8yspG-WFlb2NArWshJxX21SKEME61A/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center hover:border-foreground/30 hover:shadow-md cursor-pointer group" 
              style={{"transitionDelay":"50ms"}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute top-3.5 end-3.5 size-4 text-muted-foreground opacity-60 transition-all group-hover:opacity-100 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M12 6h6v6"></path>
                <path d="M11 13l7 -7"></path>
                <path d="M18 13v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"></path>
              </svg>
              <span className="flex size-11 items-center justify-center rounded-full border border-border bg-background group-hover:border-foreground/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-certificate size-5">
                  <path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path>
                  <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path>
                  <path d="M6 9l12 0"></path>
                  <path d="M6 12l3 0"></path>
                  <path d="M6 15l2 0"></path>
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold group-hover:text-primary transition-colors" dir="ltr">
                  Database Fundamentals
                </p>
                <p className="mt-1 text-xs text-muted-foreground">Mahara Tech</p>
              </div>
            </a>
            
            <a 
              href="https://drive.google.com/file/d/1u7DXZADnrxqy2uqeRpjbGN6Lut6aT_wf/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center hover:border-foreground/30 hover:shadow-md cursor-pointer group" 
              style={{"transitionDelay":"100ms"}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute top-3.5 end-3.5 size-4 text-muted-foreground opacity-60 transition-all group-hover:opacity-100 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M12 6h6v6"></path>
                <path d="M11 13l7 -7"></path>
                <path d="M18 13v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"></path>
              </svg>
              <span className="flex size-11 items-center justify-center rounded-full border border-border bg-background group-hover:border-foreground/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-certificate size-5">
                  <path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path>
                  <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path>
                  <path d="M6 9l12 0"></path>
                  <path d="M6 12l3 0"></path>
                  <path d="M6 15l2 0"></path>
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold group-hover:text-primary transition-colors" dir="ltr">
                  Cloud and Virtualization Concepts
                </p>
                <p className="mt-1 text-xs text-muted-foreground">Mahara Tech</p>
              </div>
            </a>
            
            <a 
              href="https://drive.google.com/file/d/12S64d4RWwQtESOru8c9Z9TBZNsjQ3FAl/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center hover:border-foreground/30 hover:shadow-md cursor-pointer group" 
              style={{"transitionDelay":"150ms"}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute top-3.5 end-3.5 size-4 text-muted-foreground opacity-60 transition-all group-hover:opacity-100 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M12 6h6v6"></path>
                <path d="M11 13l7 -7"></path>
                <path d="M18 13v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"></path>
              </svg>
              <span className="flex size-11 items-center justify-center rounded-full border border-border bg-background group-hover:border-foreground/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-certificate size-5">
                  <path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path>
                  <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path>
                  <path d="M6 9l12 0"></path>
                  <path d="M6 12l3 0"></path>
                  <path d="M6 15l2 0"></path>
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold group-hover:text-primary transition-colors" dir="ltr">
                  Linux Red Hat System Administration I
                </p>
                <p className="mt-1 text-xs text-muted-foreground">Red Hat</p>
              </div>
            </a>
            
          </div>
          
          <h3 className="mb-6 text-center text-lg font-semibold">{t("edu.volunteer.heading")}</h3>
          <div className="mx-auto flex max-w-3xl flex-col gap-4">
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
              <span className="text-sm font-semibold text-primary">{t("edu.volunteer.first")}</span>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{t("edu.volunteer.nasa.title")}</span>
                <span className="text-xs text-muted-foreground">{t("edu.volunteer.nasa.desc")}</span>
              </div>
            </div>
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex items-center gap-3 rounded-2xl border border-border bg-card p-5" style={{"transitionDelay":"50ms"}}>
              <span className="text-sm font-semibold text-primary">{t("edu.volunteer.trainer")}</span>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{t("edu.volunteer.oop.title")}</span>
                <span className="text-xs text-muted-foreground">{t("edu.volunteer.oop.desc")}</span>
              </div>
            </div>
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex items-center gap-3 rounded-2xl border border-border bg-card p-5" style={{"transitionDelay":"100ms"}}>
              <span className="text-sm font-semibold text-primary">{t("edu.volunteer.mentor")}</span>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{t("edu.volunteer.cpp.org")}</span>
                <span className="text-xs text-muted-foreground">{t("edu.volunteer.cpp.desc")}</span>
              </div>
            </div>
          </div>
          
          <h3 className="mb-6 mt-16 text-center text-lg font-semibold">{t("edu.languages.heading")}</h3>
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-language size-4 text-muted-foreground">
                <path d="M9 6.371c0 4.418 -2.239 6.629 -5 6.629"></path>
                <path d="M4 6.371h7"></path>
                <path d="M5 9c0 2.144 2.252 3.908 6 4"></path>
                <path d="M12 20l4 -9l4 9"></path>
                <path d="M19.1 18h-6.2"></path>
                <path d="M6.694 3l.793 .582"></path></svg><span className="text-sm font-medium">{t("edu.languages.arabic")}</span><span className="text-sm text-muted-foreground">{t("edu.languages.arabic.level")}</span>
            </div>
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5" style={{"transitionDelay":"50ms"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-language size-4 text-muted-foreground">
                <path d="M9 6.371c0 4.418 -2.239 6.629 -5 6.629"></path>
                <path d="M4 6.371h7"></path>
                <path d="M5 9c0 2.144 2.252 3.908 6 4"></path>
                <path d="M12 20l4 -9l4 9"></path>
                <path d="M19.1 18h-6.2"></path>
                <path d="M6.694 3l.793 .582"></path></svg><span className="text-sm font-medium">{t("edu.languages.english")}</span><span className="text-sm text-muted-foreground">{t("edu.languages.english.level")}</span>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
