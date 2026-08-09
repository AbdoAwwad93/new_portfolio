export default function AboutSection() {
  return (
    <>
      <section id="about" className="w-full py-20 sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-4">
          <div className="transition-all duration-500 ease-out motion-reduce:duration-300 translate-y-0 opacity-100 motion-reduce:translate-y-0 mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              نبذة عني
            </h2>
          </div>
          <div className="transition-all duration-500 ease-out motion-reduce:duration-300 translate-y-0 opacity-100 motion-reduce:translate-y-0 mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center" style={{"transitionDelay":"100ms"}}>
            <p className="text-lg leading-relaxed text-muted-foreground">
مهندس برمجيات (Backend Developer) متمرس في بناء أنظمة برمجية قوية وموثوقة باستخدام تقنيات .NET، و Entity Framework، وتطوير واجهات برمجة التطبيقات (RESTful APIs)، بالإضافة إلى إلمام جيد بإطار العمل Django REST Framework. أتميز بمهارات عالية في حل المشكلات، والاهتمام الدقيق بالتفاصيل، مع التزام تام بكتابة أكواد برمجية نظيفة، سهلة الصيانة، وقابلة للاختبار.            </p>
          </div>
        </div>
      </section>
    </>
  );
}
