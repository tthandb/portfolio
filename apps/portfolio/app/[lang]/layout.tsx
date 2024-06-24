import '../globals.css';
import '@repo/ui/styles.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { JetBrains_Mono as JetBrainsMono } from 'next/font/google';
import type { Locale } from 'dictionaries/i18n.config';

// const inter = Inter({ subsets: ["latin"] });
const jetbrain = JetBrainsMono({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Home | Ryan Nguyen',
  description: 'Hello! I\'m Ryan Nguyen, a self-taught software developer based in Vietnam with a passion for technology and innovation. I specialize in developing sophisticated web applications and versatile cross-platform mobile apps, leveraging the latest modern technologies to deliver high-quality, user-centric solutions. My journey in software development is fueled by continuous learning and a commitment to excellence, ensuring that every project I undertake meets the highest standards of functionality and design.',
}

export default function RootLayout({
  children,
  params: {lang},
}: {
  children: ReactNode;
  params: { lang: Locale };
}): JSX.Element {
  return (
    <html lang={lang}>
    <body className={jetbrain.className}>{children}</body>
    </html>
  );
}
