import '@/app/globals.css';
import { Metadata } from 'next';
import {  poppins } from '@/app/lib/fonts';
import ScrollToHash from '@/app/components/smooth';
import { Suspense } from 'react';
import Header from './components/header';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Brightwood',
    default: 'Williams Ezepue – Software Engineer (Flutter, Web, Firebase & Supabase)',
  },
  description: 'Personal portfolio of Williams Ezepue, a software engineer specializing in Flutter development, web applications, Firebase & Supabase architecture, and scalable cloud solutions.',
  icons: {
    icon: [
      { url: '/icons/favicon.svg', type: 'image/svg+xml' }, // modern scalable favicon
      { url: '/favicon.ico?v=2', sizes: 'any', type: 'image/x-icon' },
      { url: '/icons/favicon.ico', sizes: 'any', type: 'image/x-icon' }, // fallback
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' }, // fallback PNG
      { url: '/icons/favicon-192x192.png', sizes: '192x192', type: 'image/png' }, // Android/PWA
      { url: '/icons/favicon-512x512.png', sizes: '512x512', type: 'image/png' }, // Android/PWA
      { url: '/icons/maskable-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: [
      { url: '/favicon.ico?v=2', sizes: 'any', type: 'image/x-icon' },
    ],
  },
};
 
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`flex flex-col`}>
      <body className={`${poppins.className} antialiased flex flex-1`}>
        <Suspense fallback={null}>
          <ScrollToHash />
        </Suspense>
        <div className='flex h-screen w-full flex-col overflow-hidden bg-bg'>
          <div id='scrollableParent' className='flex flex-col justify-between w-full relative overflow-x-hidden overflow-y-auto'>
            <Header />
              <div className='flex flex-1 flex-col min-h-max my-32'>
                <div className='flex min-h-screen justify-center'>
                  {children}
                </div>
              </div>
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}