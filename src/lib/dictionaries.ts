import 'server-only'

export interface Dictionary {
  hero: {
    tagline: string;
    subTagline: string;
    cta: string;
  };
  navigation: {
    home: string;
    about: string;
    portfolios: string;
    testimonials: string;
    contact: string;
  };
  explanation: {
    title: string;
    subtitle: string;
    step1_title: string;
    step1_description: string;
    step2_title: string;
    step2_description: string;
    step3_title: string;
    step3_description: string;
  };
}

const dictionaries: { [key: string]: () => Promise<Dictionary> } = {
  en: () => import('@/content/en.json').then((module) => module.default as Dictionary),
  el: () => import('@/content/el.json').then((module) => module.default as Dictionary),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => dictionaries[locale]()
