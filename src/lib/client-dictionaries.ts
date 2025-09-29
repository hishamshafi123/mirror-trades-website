export interface Dictionary {
  hero: {
    tagline: string | string[];
    subTagline: string;
    cta: string;
  };
  navigation: {
    home: string;
    about: string;
    portfolios: string;
    team: string;
    testimonials: string;
    contact: string;
  };
  explanation: {
    title: string;
    subtitle: string;
    what_is_copy_trading: string;
    step1_title: string;
    step1_description: string;
    step2_title: string;
    step2_description: string;
    step3_title: string;
    step3_description: string;
    step4_title: string;
    step4_description: string;
  };
  portfolios: {
    title: string | string[];
    subtitle: string;
    advantages_title: string;
    advantage1_title: string;
    advantage1_description: string;
    advantage2_title: string;
    advantage2_description: string;
    advantage3_title: string;
    advantage3_description: string;
    advantage4_title: string;
    advantage4_description: string;
    advantage5_title: string;
    advantage5_description: string;
    advantage6_title: string;
    advantage6_description: string;
  };
  team: {
    title: string;
    subtitle: string;
    members: {
      name: string;
      title: string;
      bio: string;
      image: string;
    }[];
  };
  testimonials: {
    title: string;
    performance_title: string;
    disclaimer: string;
  };
  trust: {
    title: string;
    intro_paragraph: string;
    transparency_title: string;
    transparency_description: string;
    expertise_title: string;
    expertise_description: string;
    guidance_title: string;
    guidance_description: string;
    disclaimer_paragraph: string;
  };
  onboarding: {
    title: string;
    cta_button: string;
    step1_title: string;
    step1_description: string;
    step2_title: string;
    step2_description: string;
    step3_title: string;
    step3_description: string;
    step4_title: string;
    step4_description: string;
    step5_title: string;
    step5_description: string;
  };
  faq: {
    title: string;
    contact_prompt: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };
  riskWarning: {
    title: string;
    message: string;
    instruction: string;
    acceptButton: string;
    riskDisclosureLink: string;
    termsLink: string;
  };
  newsletter: {
    title: string;
    description: string;
    emailPlaceholder: string;
    consentText: string;
    gdprNote: string;
    submitButton: string;
    privacyPolicyLink: string;
  };
  footer: {
    copyright: string;
    tagline: string;
    sections: {
      navigation: {
        title: string;
        home: string;
        services: string;
        portfolios: string;
        faqs: string;
        contact: string;
      };
      legal: {
        title: string;
        termsOfUse: string;
        privacyPolicy: string;
        cookiesPolicy: string;
        riskDisclosure: string;
        regulatoryInfo: string;
      };
      contact: {
        title: string;
        description: string;
        email: string;
        followUs: string;
      };
    };
  };
}