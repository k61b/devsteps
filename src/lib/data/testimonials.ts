export interface Testimonial {
  id: number;
  quote: {
    en: string;
    tr: string;
  };
  name: string;
  role: {
    en: string;
    tr: string;
  };
  github?: string;
  linkedin?: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: {
      en: "Completed my first React project in 7 days! 🚀",
      tr: "İlk React projemi 7 günde tamamladım! 🚀"
    },
    name: "Sarah K.",
    role: {
      en: "Frontend Developer",
      tr: "Frontend Geliştirici"
    },
    github: "sarahk",
    linkedin: "sarah-keller",
    avatar: "👩‍💻"
  },
  {
    id: 2,
    quote: {
      en: "From zero to building APIs in 30 days! 💻",
      tr: "Sıfırdan 30 günde API geliştirmeye başladım! 💻"
    },
    name: "Ahmet Y.",
    role: {
      en: "Backend Developer",
      tr: "Backend Geliştirici"
    },
    github: "ahmety",
    linkedin: "ahmet-yilmaz",
    avatar: "👨‍💻"
  },
  {
    id: 3,
    quote: {
      en: "Best decision ever! Now I'm confident in my coding skills 🎯",
      tr: "En iyi kararlarımdan biriydi! Artık kodlama becerilerime güveniyorum 🎯"
    },
    name: "Maria G.",
    role: {
      en: "Full Stack Developer",
      tr: "Full Stack Geliştirici"
    },
    github: "mariag",
    linkedin: "maria-garcia",
    avatar: "👩‍🚀"
  },
  {
    id: 4,
    quote: {
      en: "The structured learning path made all the difference! ✨",
      tr: "Yapılandırılmış öğrenme yolu her şeyi değiştirdi! ✨"
    },
    name: "Can M.",
    role: {
      en: "Web Developer",
      tr: "Web Geliştirici"
    },
    github: "canm",
    linkedin: "can-mert",
    avatar: "👨‍🎨"
  },
  {
    id: 5,
    quote: {
      en: "I built 3 projects and landed my first dev job! 🎉",
      tr: "3 proje yaptım ve ilk geliştirici işimi buldum! 🎉"
    },
    name: "Emily R.",
    role: {
      en: "Junior Developer",
      tr: "Junior Geliştirici"
    },
    github: "emilyr",
    linkedin: "emily-roberts",
    avatar: "👩‍💼"
  }
];
