export const translations: Record<string, { ar: string; en: string }> = {
  // Header nav
  "nav.home": { ar: "الرئيسية", en: "Home" },
  "nav.about": { ar: "نبذة عني", en: "About" },
  "nav.experience": { ar: "الخبرات العملية", en: "Experience" },
  "nav.skills": { ar: "المهارات", en: "Skills" },
  "nav.education": { ar: "التعليم", en: "Education" },
  "nav.projects": { ar: "المشاريع", en: "Projects" },
  "nav.contact": { ar: "تواصل معي", en: "Contact" },
  "nav.name": { ar: "عبد الرحمن عواد", en: "Abdulrahman Awwad" },
  "nav.langButton": { ar: "English", en: "العربية" },
  "theme.light": { ar: "الوضع الفاتح", en: "Light Mode" },
  "theme.dark": { ar: "الوضع الداكن", en: "Dark Mode" },
  "theme.toggle": { ar: "تبديل المظهر", en: "Toggle Theme" },

  // Home
  "home.name": { ar: "عبد الرحمن عواد", en: "Abdulrahman Awwad" },
  "home.title": { ar: "مهندس برمجيات", en: "Software Engineer" },
  "home.intro": {
    ar: "مهندس برمجيات (Backend Developer) متخصص في بناء حلول برمجية قوية باستخدام تقنيات .NET وإطار عمل Entity Framework وواجهات برمجة التطبيقات (RESTful APIs). أمتلك مهارات قوية في حل المشكلات، والاهتمام بالتفاصيل، والالتزام بكتابة كود نظيف وقابل للاختبار.",
    en: "Backend Developer specializing in building robust software solutions using .NET, Entity Framework, and RESTful APIs. I have strong problem-solving skills, attention to detail, and a commitment to writing clean, testable code."
  },
  "home.cta.projects": { ar: "استعرض أعمالي", en: "View My Work" },
  "home.cta.cv": { ar: "اطلع على سيرتي الذاتية", en: "View My Resume" },
  "home.scrollDown": { ar: "مرر للأسفل", en: "Scroll Down" },

  // About
  "about.heading": { ar: "نبذة عني", en: "About Me" },
  "about.bio": {
    ar: "مهندس برمجيات (Backend Developer) متمرس في بناء أنظمة برمجية قوية وموثوقة باستخدام تقنيات .NET، و Entity Framework، وتطوير واجهات برمجة التطبيقات (RESTful APIs)، بالإضافة إلى إلمام جيد بإطار العمل Django REST Framework. أتميز بمهارات عالية في حل المشكلات، والاهتمام الدقيق بالتفاصيل، مع التزام تام بكتابة أكواد برمجية نظيفة، سهلة الصيانة، وقابلة للاختبار.",
    en: "Experienced Backend Developer skilled in building robust and reliable software systems using .NET, Entity Framework, and RESTful APIs, with solid knowledge of Django REST Framework. I excel at problem-solving, pay close attention to detail, and am committed to writing clean, maintainable, and testable code."
  },

  // Experience
  "exp.heading": { ar: "الخبرات العملية", en: "Work Experience" },
  "exp.nova.name": { ar: "Nova Solutions", en: "Nova Solutions" },
  "exp.nova.role": { ar: "مهندس برمجيات (Backend Developer)", en: "Backend Developer" },
  "exp.nova.date": { ar: "يونيو 2025 – الحالي", en: "June 2025 – Present" },
  "exp.nova.project": { ar: "نظام إدارة عيادات – ASP.NET Core Web API", en: "Clinic Management System – ASP.NET Core Web API" },
  "exp.nova.desc1": {
    ar: "تطوير نظام  متكامل لإدارة العيادات معتمداً على مبادئ \"البنية النظيفة\" (Clean Architecture). شمل النظام تسجيل المرضى، إدارة طوابير الانتظار في الوقت الفعلي، سجلات الزيارات، إصدار الفواتير، وتطبيق نظام صلاحيات مبني على الأدوار (Role-Based Access Control) مخصص للمديرين، الأطباء، وموظفي الاستقبال.",
    en: "Developed a comprehensive clinic management system based on Clean Architecture principles. The system includes patient registration, real-time queue management, visit records, billing, and Role-Based Access Control for admins, doctors, and receptionists."
  },
  "exp.nova.desc2": {
    ar: "تنفيذ نظام مصادقة آمن باستخدام (JWT) مع خاصية التجديد (Refresh Token Rotation)، وتطوير نظام استعادة كلمة المرور عبر الرمز المؤقت (OTP). بالإضافة إلى بناء معمارية متعددة المستأجرين (Multi-tenant) لتهيئة إعدادات العيادات بشكل مستقل، مع ميزات قابلة للتفعيل والتعطيل (مثل: نظام الطوابير، إدارة المخزون، والتأمين).",
    en: "Implemented secure JWT authentication with Refresh Token Rotation, OTP-based password recovery, and a multi-tenant architecture for independent clinic configuration with toggleable features (queuing, inventory, insurance)."
  },
  "exp.ash.name": { ar: "ASH Translation", en: "ASH Translation" },
  "exp.ash.role": { ar: "مهندس برمجيات مستقل (Freelance Backend Developer)", en: "Freelance Backend Developer" },
  "exp.ash.date": { ar: "نوفمبر 2025 - ديسمبر 2025", en: "November 2025 – December 2025" },
  "exp.ash.project": { ar: "نظام خدمات طلبات الترجمة– ASP.NET Core Web API", en: "Translation Request Services – ASP.NET Core Web API" },
  "exp.ash.desc1": {
    ar: "بناء نظام متكامل وجاهز للإنتاج (Production-ready) لصالح وكالة ترجمة. تضمن النظام واجهة لاستقبال طلبات العملاء (دعم رفع الملفات المتعددة Multipart Uploads، البيانات الوصفية متعددة اللغات، وقوائم خدمات مخصصة)، إلى جانب لوحة تحكم خاصة بالإدارة (Admin-only Dashboard) لتتبع وتحديث حالة الطلبات عبر دورة حياتها.",
    en: "Built a production-ready system for a translation agency. Includes client request intake (multipart uploads, multilingual metadata, custom service lists) and an admin-only dashboard for tracking and updating request statuses throughout their lifecycle."
  },

  // Skills
  "skills.heading": { ar: "المهارات التقنية", en: "Technical Skills" },
  "skills.tools.heading": { ar: "الأدوات والمنصات", en: "Tools & Platforms" },
  "skills.tools.desc": { ar: "الأدوات التي أعتمد عليها في دورة تطوير البرمجيات واختبارها.", en: "Tools I rely on in the software development and testing lifecycle." },
  "skills.languages": { ar: "لغات البرمجة", en: "Programming Languages" },
  "skills.backend": { ar: "تقنيات النهاية الخلفية (Backend)", en: "Backend Technologies" },
  "skills.databases": { ar: "قواعد البيانات و ORM", en: "Databases & ORM" },
  "skills.cs": { ar: "أساسيات علوم الحاسب", en: "CS Fundamentals" },
  "skills.design": { ar: "مبادئ التصميم", en: "Design Principles" },
  "skills.frontend": { ar: "تطوير واجهات المستخدم (Frontend)", en: "Frontend Development" },

  // Education
  "edu.heading": { ar: "التعليم والتطوير المهني", en: "Education & Professional Development" },
  "edu.degree": { ar: "بكالوريوس في علوم الحاسب (2022 - 2026)", en: "B.Sc. in Computer Science (2022 – 2026)" },
  "edu.university": { ar: "جامعة أسيوط، كلية الحاسبات والمعلومات", en: "Assiut University, Faculty of Computers & Information" },
  "edu.certs": { ar: "الشهادات المهنية", en: "Professional Certifications" },
  "edu.cert.approved": { ar: "شهادة معتمدة", en: "Certified" },
  "edu.volunteer.heading": { ar: "التطوع والجوائز", en: "Volunteering & Awards" },
  "edu.volunteer.first": { ar: "المركز الأول", en: "1st Place" },
  "edu.volunteer.nasa.title": { ar: "هاكاثون وكالة ناسا لتطبيقات الفضاء", en: "NASA Space Apps Assiut Hackathon" },
  "edu.volunteer.nasa.desc": { ar: "هاكاثون وكالة ناسا لتطبيقات الفضاء بمحافظة أسيوط", en: "NASA Space Apps Challenge – Assiut Governorate" },
  "edu.volunteer.trainer": { ar: "مدرب برمجة", en: "Programming Instructor" },
  "edu.volunteer.oop.title": { ar: "دورة OOP – التدريب الصيفي", en: "OOP Instructor – Summer Training Program" },
  "edu.volunteer.oop.desc": { ar: "قيادة دورات OOP لتدريب وتوجيه أكثر من 30 طالباً.", en: "Led OOP training sessions, mentoring 30+ students." },
  "edu.volunteer.mentor": { ar: "مينتور ++C", en: "C++ Mentor" },
  "edu.volunteer.cpp.org": { ar: "اتحاد الطلاب – المخيم الشتوي", en: "Student Union – Winter Camp" },
  "edu.volunteer.cpp.desc": {
    ar: "توجيه الطلاب في برمجة ++C خلال المخيم الشتوي، ومساعدتهم على تعميق فهمهم وتطوير مهاراتهم في حل المشكلات.",
    en: "Mentored students in C++ programming during a winter camp, helping them deepen their understanding and enhance their problem-solving skills."
  },
  "edu.languages.heading": { ar: "اللغات", en: "Languages" },
  "edu.languages.arabic": { ar: "العربية", en: "Arabic" },
  "edu.languages.arabic.level": { ar: "اللغة الأم", en: "Native" },
  "edu.languages.english": { ar: "الإنجليزية", en: "English" },
  "edu.languages.english.level": { ar: "متوسط (B2)", en: "Intermediate (B2)" },

  // Projects
  "projects.heading": { ar: "أبرز المشاريع", en: "Featured Projects" },
  "projects.subtitle": { ar: "مجموعة من التطبيقات والأنظمة التي قمت بتطويرها.", en: "A collection of applications and systems I have developed." },
  "projects.aitest.name": { ar: "AI Test Agent", en: "AI Test Agent" },
  "projects.aitest.desc": {
    ar: "وكيل ذكاء اصطناعي لاختبار قصص المستخدم. يحلل القصة المكتوبة بلغة طبيعية ويحولها إلى اختبارات واجهة مستخدم (UI) قابلة للتنفيذ آلياً باستخدام Playwright، مع التقاط لقطات شاشة وتوليد تقارير مرئية. يدعم المهام غير المتزامنة وتحديثات التقدم المباشرة.",
    en: "An AI agent for testing user stories. Analyzes natural language stories and converts them into automated UI tests using Playwright, with screenshot capture and visual report generation. Supports async tasks and live progress updates."
  },
  "projects.attendo.name": { ar: "Attendo (نظام إدارة الحضور الذكي)", en: "Attendo (Smart Attendance System)" },
  "projects.attendo.desc": {
    ar: "خلفية برمجية لنظام إدارة حضور متعدد المستأجرين (Multi-tenant). يوفر واجهات برمجة تطبيقات آمنة (REST APIs) مع مصادقة JWT، استعادة كلمة المرور عبر OTP، والتحقق من الحضور عبر الموقع الجغرافي ومطابقة شبكة WiFi.",
    en: "A multi-tenant attendance management backend. Provides secure REST APIs with JWT authentication, OTP password recovery, and attendance verification via geolocation and WiFi matching."
  },
  "projects.nova.name": { ar: "نظام إدارة عيادات – ASP.NET Core Web API", en: "Clinic Management System – ASP.NET Core Web API" },
  "projects.nova.desc": {
    ar: "تطوير نظام  متكامل لإدارة العيادات معتمداً على مبادئ \"البنية النظيفة\" (Clean Architecture). شمل النظام تسجيل المرضى، إدارة طوابير الانتظار في الوقت الفعلي، سجلات الزيارات، إصدار الفواتير، وتطبيق نظام صلاحيات مبني على الأدوار (Role-Based Access Control) مخصص للمديرين، الأطباء، وموظفي الاستقبال. تنفيذ نظام مصادقة آمن باستخدام (JWT) مع خاصية التجديد (Refresh Token Rotation)، وتطوير نظام استعادة كلمة المرور عبر الرمز المؤقت (OTP). بالإضافة إلى بناء معمارية متعددة المستأجرين (Multi-tenant) لتهيئة إعدادات العيادات بشكل مستقل.",
    en: "Developed a comprehensive clinic management system using Clean Architecture. Includes patient registration, real-time queue management, visit records, billing, and RBAC. Implemented secure JWT with refresh token rotation, OTP password recovery, and multi-tenant architecture for independent clinic configuration."
  },
  "projects.ash.name": { ar: "نظام خدمات طلبات الترجمة – ASP.NET Core Web API", en: "Translation Services System – ASP.NET Core Web API" },
  "projects.ash.desc": {
    ar: "بناء نظام متكامل وجاهز للإنتاج (Production-ready) لصالح وكالة ترجمة. تضمن النظام واجهة لاستقبال طلبات العملاء (دعم رفع الملفات المتعددة Multipart Uploads، البيانات الوصفية متعددة اللغات، وقوائم خدمات مخصصة)، إلى جانب لوحة تحكم خاصة بالإدارة (Admin-only Dashboard) لتتبع وتحديث حالة الطلبات عبر دورة حياتها.",
    en: "Built a production-ready system for a translation agency. Includes client request intake with multipart uploads, multilingual metadata, custom service lists, and an admin-only dashboard for tracking request statuses throughout their lifecycle."
  },
  "projects.quizroom.name": { ar: "QuizRoom (نظام إدارة الاختبارات الطلابية)", en: "QuizRoom (Student Quiz Management)" },
  "projects.quizroom.desc": {
    ar: "تطوير نظام إدارة اختبارات تفاعلي يحتوي على منصات خاصة للطلاب والمعلمين. يدعم واجهات برمجة تطبيقات آمنة، التحكم بالوصول بناءً على الأدوار، إدارة دورة حياة الاختبار، وتوفير تحليلات أداء للمعلمين.",
    en: "Developed an interactive quiz management system with dedicated student and teacher portals. Supports secure APIs, role-based access control, quiz lifecycle management, and performance analytics for teachers."
  },
  "projects.twitter.name": { ar: "Twitter Clone Web API", en: "Twitter Clone Web API" },
  "projects.twitter.desc": {
    ar: "تصميم وتطوير واجهة برمجة تطبيقات (REST API) تحاكي الميزات الأساسية لمنصة تويتر، بما في ذلك المصادقة، نشر التغريدات، التعليقات، الإعجابات، والمتابعات، مبنية على بنية قواعد بيانات علائقية.",
    en: "Designed and developed a REST API mimicking core Twitter features including authentication, posting tweets, comments, likes, and follows, built on a relational database architecture."
  },
  "projects.kitabkhana.name": { ar: "KitabKhana (متجر كتب إلكتروني) – ASP.NET Core MVC", en: "KitabKhana (Online Bookstore) – ASP.NET Core MVC" },
  "projects.kitabkhana.desc": {
    ar: "إنشاء محاكاة لمتجر كتب إلكتروني يتضمن تصفح الكتب، عربة التسوق، وعمليات دفع مدعومة بواسطة Stripe. تطبيق مصادقة المستخدمين، سجل المشتريات، واستخدام نمط المستودع (Repository Pattern) مع حقن التبعيات (Dependency Injection) لبناء معمارية قابلة للتوسع.",
    en: "Created an online bookstore simulation with browsing, cart, and Stripe-powered payments. Implemented user authentication, purchase history, and applied Repository Pattern with Dependency Injection for scalable architecture."
  },
  "projects.railroads.name": { ar: "RailRoads & Routes (منصة حجز النقل) – ASP.NET Core MVC", en: "RailRoads & Routes (Transportation Booking Platform) – ASP.NET Core MVC" },
  "projects.railroads.desc": {
    ar: "المساهمة في تطوير منصة لحجز رحلات الحافلات والقطارات تشمل جدولة الرحلات، إدارة المركبات والمحطات، والحجز في الوقت الفعلي باستخدام SignalR. تطبيق مصادقة آمنة، سير عمل للحجوزات، وعمليات قاعدة بيانات فعالة باستخدام EF Core.",
    en: "Contributed to developing a booking platform for buses and trains with trip scheduling, vehicle/station management, and real time booking using SignalR. Implemented secure authentication, booking workflows, and efficient database operations with EF Core."
  },

  // Contact
  "contact.heading": { ar: "تواصل معي", en: "Contact Me" },
  "contact.info": { ar: "معلومات التواصل", en: "Contact Information" },
  "contact.available": {
    ar: "متاح لفرص العمل الجديدة أو التعاون أو تبادل الخبرات. لا تتردد في التواصل معي.",
    en: "Available for new job opportunities, collaboration, or knowledge sharing. Don't hesitate to reach out."
  },
  "contact.social": { ar: "تواصل معي عبر", en: "Connect With Me" },

  // Footer
  "footer.copyright": { ar: "© 2026 عبد الرحمن عواد. جميع الحقوق محفوظة.", en: "© 2026 Abdulrahman Awwad. All rights reserved." },
  "footer.role": { ar: "مهندس برمجيات", en: "Software Engineer" },

  // Blog
  "blog.heading": { ar: "أحدث المقالات", en: "Latest Articles" },
  "blog.subtitle": { ar: "ملاحظات حول تحويل المتطلبات الغامضة إلى نتائج واضحة وقابلة للقياس.", en: "Notes on turning ambiguous requirements into clear, measurable outcomes." },
  "blog.article1.date": { ar: "23 يونيو 2026", en: "June 23, 2026" },
  "blog.article1.readTime": { ar: "٨ دقائق قراءة", en: "8 min read" },
  "blog.article1.title": { ar: "تصميم Vertical ERP لإدارة النقل والأساطيل المدرسية", en: "Designing a Vertical ERP for School Transport & Fleet Management" },
  "blog.article1.desc": {
    ar: "كيف تحولت عمليات تشغيل متفرقة إلى منظومة واحدة مترابطة من واقع تحليل فعلي لمشروع داخل السوق السعودي.",
    en: "How scattered operations transformed into a unified, interconnected system based on real-world analysis of a project within the Saudi market."
  },
  "blog.readMore": { ar: "قراءة المزيد", en: "Read More" },
  "blog.viewAll": { ar: "عرض جميع المقالات", en: "View All Articles" },
};
