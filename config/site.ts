interface SiteConfig {
  name: string;
  description: string;
  links: {
    twitter: string;
    github: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Lexproof - Compliance Verification for Web3',
  description: 'We make it easy to verify compliance for Web3 projects.',
  links: {
    twitter: 'https://twitter.com/LexproofHQ',
    github: 'https://github.com/Lexproof',
  },
};
