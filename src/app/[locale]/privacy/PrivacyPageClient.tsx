'use client';

import { useTranslations } from 'next-intl';
import { Shield, Lock, Eye, Database, Cookie, Mail, Scale, Server, Globe } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { type Locale } from '@/lib/i18n/config';
import { Card } from '@/components/ui/Card';

interface PrivacyPageClientProps {
  locale: Locale;
}

export default function PrivacyPageClient({ locale }: PrivacyPageClientProps) {
  const t = useTranslations('tools.privacy');

  const highlights = [
    {
      icon: Lock,
      title: t('howItWorks.points.0'),
      description: t('security.content'),
    },
    {
      icon: Eye,
      title: t('howItWorks.points.1'),
      description: t('dataCollection.items.0.description'),
    },
    {
      icon: Database,
      title: t('howItWorks.points.2'),
      description: t('dataCollection.items.1.description'),
    },
    {
      icon: Cookie,
      title: t('cookies.title'),
      description: t('cookies.points.0'),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[hsl(var(--color-primary)/0.1)] via-[hsl(var(--color-background))] to-[hsl(var(--color-secondary)/0.1)] py-16 mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-6">
                {t('title')}
              </h1>
              <p className="text-lg text-[hsl(var(--color-muted-foreground))]">
                {t('introduction.content')}
              </p>
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mt-4">
                {t('lastUpdated')}
              </p>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-6 text-center" hover>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-2 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">

              {/* How It Works */}
              <Card className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4 flex items-center gap-2">
                  <Server className="h-6 w-6 text-[hsl(var(--color-primary))]" />
                  {t('howItWorks.title')}
                </h2>
                <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                  {t('howItWorks.content')}
                </p>
                <ul className="space-y-3">
                  {(t.raw('howItWorks.points') as string[]).map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-[hsl(var(--color-muted-foreground))]">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-sm font-medium flex-shrink-0">
                        {i + 1}
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Data Collection */}
              <Card className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4 flex items-center gap-2">
                  <Database className="h-6 w-6 text-[hsl(var(--color-primary))]" />
                  {t('dataCollection.title')}
                </h2>
                <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                  {t('dataCollection.content')}
                </p>
                <div className="space-y-4">
                  {(t.raw('dataCollection.items') as Array<{ title: string; description: string }>).map((item, i) => (
                    <div key={i} className="border-l-4 border-[hsl(var(--color-primary))] pl-4">
                      <h3 className="font-semibold text-[hsl(var(--color-foreground))]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Cookies */}
              <Card className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4 flex items-center gap-2">
                  <Cookie className="h-6 w-6 text-[hsl(var(--color-primary))]" />
                  {t('cookies.title')}
                </h2>
                <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                  {t('cookies.content')}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))]">
                  {(t.raw('cookies.points') as string[]).map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </Card>

              {/* Third Party */}
              <Card className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4 flex items-center gap-2">
                  <Globe className="h-6 w-6 text-[hsl(var(--color-primary))]" />
                  {t('thirdParty.title')}
                </h2>
                <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                  {t('thirdParty.content')}
                </p>
                <div className="space-y-4">
                  {(t.raw('thirdParty.services') as Array<{ name: string; description: string }>).map((service, i) => (
                    <div key={i} className="bg-[hsl(var(--color-muted)/0.3)] rounded-lg p-4">
                      <h3 className="font-semibold text-[hsl(var(--color-foreground))]">
                        {service.name}
                      </h3>
                      <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Your Rights */}
              <Card className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4 flex items-center gap-2">
                  <Scale className="h-6 w-6 text-[hsl(var(--color-primary))]" />
                  {t('rights.title')}
                </h2>
                <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                  {t('rights.content')}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))]">
                  {(t.raw('rights.points') as string[]).map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </Card>

              {/* Security */}
              <Card className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4 flex items-center gap-2">
                  <Lock className="h-6 w-6 text-[hsl(var(--color-primary))]" />
                  {t('security.title')}
                </h2>
                <p className="text-[hsl(var(--color-muted-foreground))]">
                  {t('security.content')}
                </p>
              </Card>

              {/* Contact */}
              <Card className="p-6 md:p-8 bg-green-50 border-green-200">
                <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Mail className="h-6 w-6" />
                  {t('contact.title')}
                </h2>
                <p className="text-green-700">
                  {t('contact.content')}
                </p>
              </Card>

            </div>
          </div>
        </section>

        {/* Privacy Badge */}
        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-green-50 border border-green-200 rounded-lg">
                <Shield className="h-8 w-8 text-green-600" />
                <div className="text-left">
                  <p className="font-semibold text-green-800">
                    {t('security.title')}
                  </p>
                  <p className="text-sm text-green-600">
                    {t('howItWorks.points.0')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}