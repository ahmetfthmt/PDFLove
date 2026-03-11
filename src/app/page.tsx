'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n/config';

// Root page handles client-side redirection based on browser language
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    try {
      const browserLang = navigator.language.split('-')[0].toLowerCase();
      // Only redirect to Turkish if the system language is Turkish, otherwise use English
      const locale = browserLang === 'tr' ? 'tr' : defaultLocale;
      router.replace(`/${locale}`);
    } catch {
      router.replace(`/${defaultLocale}`);
    }
  }, [router]);

  // Render nothing while redirecting
  return null;
}
