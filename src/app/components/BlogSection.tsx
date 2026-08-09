export default function BlogSection() {
  return (
    <>
      <section id="blog" className="w-full py-20 sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-4">
          <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              أحدث المقالات
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              ملاحظات حول تحويل المتطلبات الغامضة إلى نتائج واضحة وقابلة للقياس.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 block">
              <a className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-muted/50" href="/blog/vertical-erp-school-transport-ksa">
                <div className="mb-2 flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground" dir="rtl">
                  <time dateTime="2026-06-23T00:00:00.000Z">23 يونيو 2026</time><span aria-hidden="true">·</span><span>٨ دقائق قراءة</span>
                </div>
                <h3 className="mb-2 font-semibold">
                  تصميم Vertical ERP لإدارة النقل والأساطيل المدرسية
                </h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">
                  كيف تحولت عمليات تشغيل متفرقة إلى منظومة واحدة مترابطة من واقع
                  تحليل فعلي لمشروع داخل السوق السعودي.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium">قراءة المزيد<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-arrow-right size-4 rtl:rotate-180">
                    <path d="M5 12l14 0"></path>
                    <path d="M13 18l6 -6"></path>
                    <path d="M13 6l6 6"></path></svg></span>
              </a>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a role="button" tabIndex={0} data-slot="button" className="group/button inline-flex shrink-0 items-center justify-center rounded-md border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 border-border bg-background shadow-xs hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pe-2 has-data-[icon=inline-start]:ps-2" href="/blog">عرض جميع المقالات</a>
          </div>
        </div>
      </section>
    </>
  );
}
