'use client';

import { useTranslations } from 'next-intl';
import { FileText } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { type Locale } from '@/lib/i18n/config';

interface TermsPageClientProps {
    locale: Locale;
}

export default function TermsPageClient({ locale }: TermsPageClientProps) {
    const t = useTranslations('tools');

    return (
        <div className="min-h-screen flex flex-col">
            <Header locale={locale} />

            <main className="flex-1">
                <section className="bg-gradient-to-br from-[hsl(var(--color-primary)/0.1)] via-[hsl(var(--color-background))] to-[hsl(var(--color-secondary)/0.1)] py-16 mt-20">
                    <div className="container mx-auto px-4 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                            <FileText className="h-8 w-8 text-blue-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-6">
                            {t('terms.title')}
                        </h1>
                        <p className="text-lg text-[hsl(var(--color-muted-foreground))] max-w-2xl mx-auto">
                            {t('terms.lastUpdated')}
                        </p>
                    </div>
                </section>

                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto prose prose-rose">
                            <h2 className="text-2xl font-bold mb-4">{t('terms.section1.title')}</h2>
                            <p className="text-[hsl(var(--color-muted-foreground))] mb-8">
                                {t('terms.section1.content')}
                            </p>

                            <h2 className="text-2xl font-bold mb-4">{t('terms.section2.title')}</h2>
                            <p className="text-[hsl(var(--color-muted-foreground))] mb-8">
                                {t('terms.section2.content')}
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer locale={locale} />
        </div>
    );
}
