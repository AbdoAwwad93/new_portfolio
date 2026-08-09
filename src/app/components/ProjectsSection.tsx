export default function ProjectsSection() {
  return (
    <>
      <section id="projects" className="w-full py-20 sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-4">
          <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              أبرز المشاريع
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
             مجموعة من التطبيقات والأنظمةالتي قمت بتطويرها.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            
            {/* Project 1: AI Test Agent */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-2 font-semibold">AI Test Agent</h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                وكيل ذكاء اصطناعي لاختبار قصص المستخدم. يحلل القصة المكتوبة بلغة طبيعية ويحولها إلى اختبارات واجهة مستخدم (UI) قابلة للتنفيذ آلياً باستخدام Playwright، مع التقاط لقطات شاشة وتوليد تقارير مرئية. يدعم المهام غير المتزامنة وتحديثات التقدم المباشرة.
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">FastAPI</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Playwright</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">LLMs</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">PostgreSQL</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Server-Sent Events</span>
              </div>
            </div>
            
            {/* Project 2: Attendo */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"60ms"}}>
              <h3 className="mb-2 font-semibold">
                Attendo (نظام إدارة الحضور الذكي)
              </h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                خلفية برمجية لنظام إدارة حضور متعدد المستأجرين (Multi-tenant). يوفر واجهات برمجة تطبيقات آمنة (REST APIs) مع مصادقة JWT، استعادة كلمة المرور عبر OTP، والتحقق من الحضور عبر الموقع الجغرافي ومطابقة شبكة WiFi.
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">ASP.NET Core 8</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">PostgreSQL</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">EF Core</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">JWT</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">MailKit</span>
              </div>
            </div>
            
            {/* Project 3: Nova Clinic System */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"120ms"}}>
              <h3 className="mb-2 font-semibold">
                نظام إدارة عيادات – ASP.NET Core Web API
              </h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                تطوير نظام  متكامل لإدارة العيادات معتمداً على مبادئ &quot;البنية النظيفة&quot; (Clean Architecture). شمل النظام تسجيل المرضى، إدارة طوابير الانتظار في الوقت الفعلي، سجلات الزيارات، إصدار الفواتير، وتطبيق نظام صلاحيات مبني على الأدوار (Role-Based Access Control) مخصص للمديرين، الأطباء، وموظفي الاستقبال. تنفيذ نظام مصادقة آمن باستخدام (JWT) مع خاصية التجديد (Refresh Token Rotation)، وتطوير نظام استعادة كلمة المرور عبر الرمز المؤقت (OTP). بالإضافة إلى بناء معمارية متعددة المستأجرين (Multi-tenant) لتهيئة إعدادات العيادات بشكل مستقل.
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">.NET 8</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">PostgreSQL</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">EF Core</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">ASP.NET Core Identity</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">JWT</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Clean Architecture</span>
              </div>
            </div>

            {/* Project 4: ASH Translation */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"180ms"}}>
              <h3 className="mb-2 font-semibold">
                نظام خدمات طلبات الترجمة – ASP.NET Core Web API
              </h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                بناء نظام متكامل وجاهز للإنتاج (Production-ready) لصالح وكالة ترجمة. تضمن النظام واجهة لاستقبال طلبات العملاء (دعم رفع الملفات المتعددة Multipart Uploads، البيانات الوصفية متعددة اللغات، وقوائم خدمات مخصصة)، إلى جانب لوحة تحكم خاصة بالإدارة (Admin-only Dashboard) لتتبع وتحديث حالة الطلبات عبر دورة حياتها.
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">ASP.NET Core Web API</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">.NET 8</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">EF Core</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">PostgreSQL</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">JWT</span>
              </div>
            </div>

            {/* Project 5: QuizRoom */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"240ms"}}>
              <h3 className="mb-2 font-semibold">
                QuizRoom (نظام إدارة الاختبارات الطلابية)
              </h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                تطوير نظام إدارة اختبارات تفاعلي يحتوي على منصات خاصة للطلاب والمعلمين. يدعم واجهات برمجة تطبيقات آمنة، التحكم بالوصول بناءً على الأدوار، إدارة دورة حياة الاختبار، وتوفير تحليلات أداء للمعلمين.
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Django REST Framework</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">Python</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">PostgreSQL</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">JWT</span>
              </div>
            </div>
            
            {/* Project 6: Twitter Clone */}
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 flex flex-col rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"300ms"}}>
              <h3 className="mb-2 font-semibold">
                Twitter Clone Web API
              </h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                تصميم وتطوير واجهة برمجة تطبيقات (REST API) تحاكي الميزات الأساسية لمنصة تويتر، بما في ذلك المصادقة، نشر التغريدات، التعليقات، الإعجابات، والمتابعات، مبنية على بنية قواعد بيانات علائقية.
              </p>
              <div className="flex flex-wrap gap-2">
                <span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">ASP.NET Core 9</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">EF Core</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">SQL Server</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">ASP.NET Identity</span><span data-slot="badge" className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground" dir="ltr">JWT</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
