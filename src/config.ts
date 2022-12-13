export const SITE = {
  title: 'GeauxWeisbeck4.dev Docs',
  description: 'Documentation for the personal site of Andrew Weisbeck.',
  defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/geauxweisbeck4/geauxweisbeck4.dev-docs',
    alt:
      'GeauxWeisbeck4.dev Logo,' + ' chillin on his awesome portfolio website.',
  },
  twitter: 'geauxweisbeck4',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: 'ltr' | 'rtl';
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/geauxweisbeck4/geauxweisbeck4.dev-docs/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://geauxweisbeck4.dev/contact`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    'Section Header': [
      { text: 'Introduction', link: 'en/introduction' },
      { text: 'Front End', link: 'en/front-end' },
      { text: 'Back End', link: 'en/back-end' },
      { text: 'GeauxWeisbeck4.dev', link: 'en/geauxweisbeck4-dev' },
      { text: 'Tar Heel Dev Studio', link: 'en/tar-heel-dev-studio' },
      { text: 'Deno', link: 'en/deno' },
      { text: 'Final Advice', link: 'en/final-advice' },
    ],
    'Other Projects': [{ text: 'Page 4', link: 'en/other-projects' }],
  },
};
