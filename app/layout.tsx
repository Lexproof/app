import { ThemeProvider } from '@/providers/theme';
import { Inter, Raleway } from '@next/font/google';

import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/site-header';
import '@/styles/globals.css';

const raleway = Raleway({
  variable: '--display-font',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--body-font',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'h-screen bg-neutral-100 font-display text-neutral-900 antialiased dark:bg-neutral-900 dark:text-white',
          inter.variable,
          raleway.variable
        )}
      >
        <ThemeProvider>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
