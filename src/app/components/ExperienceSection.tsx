export default function ExperienceSection() {
  return (
    <>
      <section id="experience" className="w-full py-20 sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-4">
          <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              الخبرات العملية
            </h2>
          </div>
          <div className="group/timeline flex data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col mx-auto max-w-3xl" data-orientation="vertical" data-slot="timeline">

            {/* Experience 1: Nova Solutions */}
            <div className="group/timeline-item relative flex flex-1 flex-col gap-0.5 group-data-[orientation=vertical]/timeline:ms-8 group-data-[orientation=horizontal]/timeline:mt-8 group-data-[orientation=horizontal]/timeline:not-last:pe-8 group-data-[orientation=vertical]/timeline:not-last:pb-6 has-[+[data-completed]]:**:data-[slot=timeline-separator]:bg-primary transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0" data-completed="true" data-slot="timeline-item">
              <div className="" data-slot="timeline-header">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-sm font-semibold">N</span><span className="font-semibold">Nova Solutions</span>
                </div>
                <h3 className="font-medium mt-3 text-base" data-slot="timeline-title">
                  مهندس برمجيات (Backend Developer)
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-calendar size-3.5">
                    <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12"></path>
                    <path d="M16 3v4"></path>
                    <path d="M8 3v4"></path>
                    <path d="M4 11h16"></path>
                    <path d="M11 15h1"></path>
                    <path d="M12 15v3"></path></svg>أكتوبر 2025 – مارس 2026</span><span className="inline-flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-map-pin size-3.5">
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0"></path></svg>عن بعد / مصر</span>
                </div>
              </div>
              <div aria-hidden="true" className="group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:-translate-y-1/2 group-data-[orientation=vertical]/timeline:-start-6 group-data-[orientation=vertical]/timeline:-translate-x-1/2 group-data-[orientation=vertical]/timeline:rtl:translate-x-1/2 absolute size-4 rounded-full border-2 border-primary/20 group-data-[orientation=vertical]/timeline:top-0 group-data-[orientation=horizontal]/timeline:start-0 group-data-completed/timeline-item:border-primary" data-slot="timeline-indicator"></div>
              <div aria-hidden="true" className="group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:-translate-y-1/2 group-data-[orientation=vertical]/timeline:-start-6 group-data-[orientation=vertical]/timeline:-translate-x-1/2 group-data-[orientation=vertical]/timeline:rtl:translate-x-1/2 absolute self-start bg-primary/10 group-last/timeline-item:hidden group-data-[orientation=horizontal]/timeline:h-0.5 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem-0.25rem)] group-data-[orientation=horizontal]/timeline:w-[calc(100%-1rem-0.25rem)] group-data-[orientation=vertical]/timeline:w-0.5 group-data-[orientation=horizontal]/timeline:translate-x-4.5 group-data-[orientation=vertical]/timeline:translate-y-4.5" data-slot="timeline-separator"></div>
              <div className="text-muted-foreground text-sm mt-3 max-w-2xl" data-slot="timeline-content">
                <div className="mt-4 rounded-xl border border-border bg-card p-4">
                  <p className="mb-2 text-sm font-semibold text-foreground">
                  نظام إدارة عيادات – ASP.NET Core Web API
                  </p>
                  <ul className="list-disc space-y-1.5 ps-4">
                    <li>
تطوير نظام  متكامل لإدارة العيادات معتمداً على مبادئ "البنية النظيفة" (Clean Architecture). شمل النظام تسجيل المرضى، إدارة طوابير الانتظار في الوقت الفعلي، سجلات الزيارات، إصدار الفواتير، وتطبيق نظام صلاحيات مبني على الأدوار (Role-Based Access Control) مخصص للمديرين، الأطباء، وموظفي الاستقبال.                    </li>
                    <li>
تنفيذ نظام مصادقة آمن باستخدام (JWT) مع خاصية التجديد (Refresh Token Rotation)، وتطوير نظام استعادة كلمة المرور عبر الرمز المؤقت (OTP). بالإضافة إلى بناء معمارية متعددة المستأجرين (Multi-tenant) لتهيئة إعدادات العيادات بشكل مستقل، مع ميزات قابلة للتفعيل والتعطيل (مثل: نظام الطوابير، إدارة المخزون، والتأمين).                    </li>
                  </ul>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">.NET 8</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">PostgreSQL</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">EF Core</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">ASP.NET Core Identity</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">JWT</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Clean Architecture</span>
                </div>
              </div>
            </div>

            {/* Experience 2: ASH Translation */}
            <div className="group/timeline-item relative flex flex-1 flex-col gap-0.5 group-data-[orientation=vertical]/timeline:ms-8 group-data-[orientation=horizontal]/timeline:mt-8 group-data-[orientation=horizontal]/timeline:not-last:pe-8 group-data-[orientation=vertical]/timeline:not-last:pb-6 has-[+[data-completed]]:**:data-[slot=timeline-separator]:bg-primary transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0" data-completed="true" data-slot="timeline-item" style={{ "transitionDelay": "80ms" }}>
              <div className="" data-slot="timeline-header">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-sm font-semibold">A</span><span className="font-semibold">ASH Translation</span>
                </div>
                <h3 className="font-medium mt-3 text-base" data-slot="timeline-title">
                  مهندس برمجيات مستقل (Freelance Backend Developer)
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-calendar size-3.5">
                    <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12"></path>
                    <path d="M16 3v4"></path>
                    <path d="M8 3v4"></path>
                    <path d="M4 11h16"></path>
                    <path d="M11 15h1"></path>
                    <path d="M12 15v3"></path></svg>نوفمبر 2025</span>
                </div>
              </div>
              <div aria-hidden="true" className="group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:-translate-y-1/2 group-data-[orientation=vertical]/timeline:-start-6 group-data-[orientation=vertical]/timeline:-translate-x-1/2 group-data-[orientation=vertical]/timeline:rtl:translate-x-1/2 absolute size-4 rounded-full border-2 border-primary/20 group-data-[orientation=vertical]/timeline:top-0 group-data-[orientation=horizontal]/timeline:start-0 group-data-completed/timeline-item:border-primary" data-slot="timeline-indicator"></div>
              <div aria-hidden="true" className="group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:-translate-y-1/2 group-data-[orientation=vertical]/timeline:-start-6 group-data-[orientation=vertical]/timeline:-translate-x-1/2 group-data-[orientation=vertical]/timeline:rtl:translate-x-1/2 absolute self-start bg-primary/10 group-last/timeline-item:hidden group-data-[orientation=horizontal]/timeline:h-0.5 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem-0.25rem)] group-data-[orientation=horizontal]/timeline:w-[calc(100%-1rem-0.25rem)] group-data-[orientation=vertical]/timeline:w-0.5 group-data-[orientation=horizontal]/timeline:translate-x-4.5 group-data-[orientation=vertical]/translate-y-4.5" data-slot="timeline-separator"></div>
              <div className="text-muted-foreground text-sm mt-3 max-w-2xl" data-slot="timeline-content">
                <div className="mt-4 rounded-xl border border-border bg-card p-4">
                  <p className="mb-2 text-sm font-semibold text-foreground">
                   نظام خدمات طلبات الترجمة– ASP.NET Core Web API
                  </p>
                  <ul className="list-disc space-y-1.5 ps-4">
                    <li>
بناء نظام متكامل وجاهز للإنتاج (Production-ready) لصالح وكالة ترجمة. تضمن النظام واجهة لاستقبال طلبات العملاء (دعم رفع الملفات المتعددة Multipart Uploads، البيانات الوصفية متعددة اللغات، وقوائم خدمات مخصصة)، إلى جانب لوحة تحكم خاصة بالإدارة (Admin-only Dashboard) لتتبع وتحديث حالة الطلبات عبر دورة حياتها.                    </li>
                  </ul>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">ASP.NET Core Web API</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">.NET 8</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">EF Core</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">PostgreSQL</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">JWT</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
