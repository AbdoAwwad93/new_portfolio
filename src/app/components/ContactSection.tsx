export default function ContactSection() {
  return (
    <>
      <section id="contact" className="w-full py-20 sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-4">
          <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              تواصل معي
            </h2>
          </div>
          <div className="transition-all duration-500 ease-out motion-reduce:duration-300 opacity-100 translate-y-0 motion-reduce:translate-y-0 mx-auto flex max-w-md flex-col rounded-2xl border border-border bg-card p-6" style={{"transitionDelay":"100ms"}}>
            <h3 className="mb-3 font-semibold">معلومات التواصل</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              متاح لفرص العمل الجديدة أو التعاون أو تبادل الخبرات.
              لا تتردد في التواصل معي.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:AbdoAwwad043@gmail.com" className="inline-flex items-center gap-2 hover:text-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-mail size-4 text-muted-foreground">
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"></path>
                  <path d="M3 7l9 6l9 -6"></path></svg><span dir="ltr">AbdoAwwad043@gmail.com</span></a>
            </div>
            <div className="mt-8">
              <h3 className="mb-3 text-sm font-semibold">تواصل معي عبر</h3>
              <div className="flex gap-3">
                <a href="https://wa.me/201555248446" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex size-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-whatsapp size-4">
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path></svg></a>
                
                <a href="https://github.com/AbdoAwwad93" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex size-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github size-4">
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
                    
                <a href="https://www.linkedin.com/in/abdulrahmanawwad/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex size-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-linkedin size-4">
                    <path d="M8 11v5"></path>
                    <path d="M8 8v.01"></path>
                    <path d="M12 16v-5"></path>
                    <path d="M16 16v-3a2 2 0 1 0 -4 0"></path>
                    <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10"></path></svg></a>
                    
                <a href="mailto:AbdoAwwad043@gmail.com" aria-label="Email" className="flex size-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-mail size-4">
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"></path>
                    <path d="M3 7l9 6l9 -6"></path></svg></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
