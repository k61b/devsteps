const DEFAULT_SITE_URL = 'https://www.devsteps.net';

const rawSiteUrl =
  typeof import.meta !== 'undefined' && import.meta.env && 'PUBLIC_SITE_URL' in import.meta.env
    ? (import.meta.env.PUBLIC_SITE_URL as string)
    : DEFAULT_SITE_URL;

export const siteUrl = (rawSiteUrl || DEFAULT_SITE_URL).replace(/\/+$/, '');

export const supportedLocales = ['en', 'tr'] as const;

export const toCanonical = (path: string) => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${normalized === '/' ? '' : normalized}`;
};

export const serializeLdJson = (schema: Record<string, unknown>) =>
  JSON.stringify(schema, null, 2);

export const baseOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DevSteps',
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  sameAs: [
    'https://github.com/k61b/devsteps',
    'https://www.reddit.com/r/devsteps/'
  ]
};

export const baseWebsiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'DevSteps',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/browse-courses?query={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
};

export const buildBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const buildCourseSchema = (args: {
  name: string;
  description: string;
  url: string;
  providerName: string;
  totalLessons: number;
  durationDays: number;
  language: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: args.name,
  description: args.description,
  url: args.url,
  inLanguage: args.language,
  provider: {
    '@type': 'Organization',
    name: args.providerName,
    sameAs: siteUrl
  },
  numberOfCredits: {
    '@type': 'StructuredValue',
    value: args.totalLessons,
    name: 'Lessons'
  },
  timeRequired: `P${args.durationDays}D`
});

export const buildArticleSchema = (args: {
  title: string;
  description: string;
  url: string;
  dateModified: string;
  datePublished?: string;
  author?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: args.title,
  description: args.description,
  url: args.url,
  dateModified: args.dateModified,
  datePublished: args.datePublished ?? args.dateModified,
  mainEntityOfPage: args.url,
  author: {
    '@type': 'Organization',
    name: args.author ?? 'DevSteps'
  },
  publisher: {
    '@type': 'Organization',
    name: 'DevSteps',
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/favicon.svg`
    }
  }
});
