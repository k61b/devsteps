export type TestimonialLocale = 'en' | 'tr' | 'es';

export interface Testimonial {
  id: number;
  quote: Record<TestimonialLocale, string>;
  name: string;
  role: Record<TestimonialLocale, string>;
  github?: string;
  linkedin?: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: {
      en: "Completed my first React project in 7 days! 🚀",
      tr: "İlk React projemi 7 günde tamamladım! 🚀",
      es: "¡Terminé mi primer proyecto de React en 7 días! 🚀"
    },
    name: "Sarah K.",
    role: {
      en: "Frontend Developer",
      tr: "Frontend Geliştirici",
      es: "Desarrolladora frontend"
    },
    github: "sarahk",
    linkedin: "sarah-keller",
    avatar: "👩‍💻"
  },
  {
    id: 2,
    quote: {
      en: "From zero to building APIs in 30 days! 💻",
      tr: "Sıfırdan 30 günde API geliştirmeye başladım! 💻",
      es: "¡Pasé de cero a crear APIs en 30 días! 💻"
    },
    name: "Ahmet Y.",
    role: {
      en: "Backend Developer",
      tr: "Backend Geliştirici",
      es: "Desarrollador backend"
    },
    github: "ahmety",
    linkedin: "ahmet-yilmaz",
    avatar: "👨‍💻"
  },
  {
    id: 3,
    quote: {
      en: "Best decision ever! Now I'm confident in my coding skills 🎯",
      tr: "En iyi kararlarımdan biriydi! Artık kodlama becerilerime güveniyorum 🎯",
      es: "¡La mejor decisión! Ahora confío en mis habilidades de programación 🎯"
    },
    name: "Maria G.",
    role: {
      en: "Full Stack Developer",
      tr: "Full Stack Geliştirici",
      es: "Desarrolladora full stack"
    },
    github: "mariag",
    linkedin: "maria-garcia",
    avatar: "👩‍🚀"
  },
  {
    id: 4,
    quote: {
      en: "The structured learning path made all the difference! ✨",
      tr: "Yapılandırılmış öğrenme yolu her şeyi değiştirdi! ✨",
      es: "¡La ruta de aprendizaje estructurada marcó toda la diferencia! ✨"
    },
    name: "Can M.",
    role: {
      en: "Web Developer",
      tr: "Web Geliştirici",
      es: "Desarrollador web"
    },
    github: "canm",
    linkedin: "can-mert",
    avatar: "👨‍🎨"
  },
  {
    id: 5,
    quote: {
      en: "I built 3 projects and landed my first dev job! 🎉",
      tr: "3 proje yaptım ve ilk geliştirici işimi buldum! 🎉",
      es: "¡Construí 3 proyectos y conseguí mi primer trabajo como desarrolladora! 🎉"
    },
    name: "Emily R.",
    role: {
      en: "Junior Developer",
      tr: "Junior Geliştirici",
      es: "Desarrolladora junior"
    },
    github: "emilyr",
    linkedin: "emily-roberts",
    avatar: "👩‍💼"
  }
];
