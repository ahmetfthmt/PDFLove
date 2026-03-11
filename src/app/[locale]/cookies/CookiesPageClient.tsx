'use client';

import { useTranslations } from 'next-intl';
import { Cookie, Info } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { type Locale } from '@/lib/i18n/config';

interface CookiesPageClientProps {
    locale: Locale;
}

export default function CookiesPageClient({ locale }: CookiesPageClientProps) {
    const t = useTranslations('tools');

    return (
        <div className="min-h-screen flex flex-col">
            <Header locale={locale} />

            <main className="flex-1">
                <section className="bg-gradient-to-br from-[hsl(var(--color-primary)/0.1)] via-[hsl(var(--color-background))] to-[hsl(var(--color-secondary)/0.1)] py-16 mt-20">
                    <div className="container mx-auto px-4 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                            <Cookie className="h-8 w-8 text-amber-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-6">
                            {t('cookies.title')}
                        </h1>
                        <p className="text-lg text-[hsl(var(--color-muted-foreground))] max-w-2xl mx-auto">
                            {t('cookies.lastUpdated')}
                        </p>
                    </div>
                </section>

                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto prose prose-rose">
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <Info className="h-5 w-5 text-blue-400" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm text-blue-700">
                                            {t('cookies.content')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-[hsl(var(--color-muted-foreground))]">
                                We use cookies to ensure that we give you the best experience on our website.
                                These cookies are necessary for the website to function and cannot be switched off in our systems.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer locale={locale} />
        </div>
    );
}
