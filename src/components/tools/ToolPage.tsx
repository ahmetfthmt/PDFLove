'use client';

import { useTranslations } from 'next-intl';
import { Tool, ToolCategory } from '@/types/tool';
import { getToolById } from '@/config/tools';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { type Locale } from '@/lib/i18n/config';
import { ToolProvider } from '@/lib/contexts/ToolContext';
import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';

// Modular Sections
import { ToolHeader } from './sections/ToolHeader';
import { DescriptionSection } from './sections/DescriptionSection';
import { HowToUseSection } from './sections/HowToUseSection';
import { UseCasesSection } from './sections/UseCasesSection';
import { FAQSection } from './sections/FAQSection';
import { RelatedToolsSection } from './sections/RelatedToolsSection';

export interface ToolPageProps {
  /** Tool data */
  tool: Tool;
  /** Tool content for SEO and documentation */
  content: any; // Using any for simplicity as it's a composite type
  /** Current locale */
  locale: string;
  /** Children for the tool interface area */
  children?: React.ReactNode;
  /** Localized content for related tools */
  localizedRelatedTools?: Record<string, { title: string; description: string }>;
}

const categoryTranslationKeys: Record<ToolCategory, string> = {
  'edit-annotate': 'editAnnotate',
  'convert-to-pdf': 'convertToPdf',
  'convert-from-pdf': 'convertFromPdf',
  'organize-manage': 'organizeManage',
  'optimize-repair': 'optimizeRepair',
  'secure-pdf': 'securePdf',
};

/**
 * ToolPage layout component provides the structure for individual tool pages.
 */
export function ToolPage({ tool, content, locale, children, localizedRelatedTools = {} }: ToolPageProps) {
  const t = useTranslations();

  // Get related tools data
  const relatedTools = tool.relatedTools
    .map(id => getToolById(id))
    .filter((t): t is Tool => t !== undefined);

  // Get tool display name for context
  const toolDisplayName = content.title || tool.id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <ToolProvider toolSlug={tool.slug} toolName={toolDisplayName}>
      <div className="min-h-screen flex flex-col" data-testid="tool-page">
        <Header locale={locale as Locale} />

        <main id="main-content" className="flex-1" tabIndex={-1}>
          <div className="max-w-7xl mx-auto px-4 pt-24 pb-8">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-4 flex items-center text-sm text-[hsl(var(--color-muted-foreground))] animate-in fade-in slide-in-from-top-4 duration-500 delay-100">
              <Link
                href={`/${locale}`}
                className="flex items-center hover:text-[hsl(var(--color-primary))] transition-colors"
                title={t('common.navigation.home')}
              >
                <Home className="w-4 h-4" />
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-[hsl(var(--color-border))]" />
              <Link
                href={`/${locale}/tools`}
                className="hover:text-[hsl(var(--color-primary))] transition-colors"
              >
                {t('common.navigation.tools')}
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-[hsl(var(--color-border))]" />
              <Link
                href={`/${locale}/tools/category/${tool.category}`}
                className="hover:text-[hsl(var(--color-primary))] transition-colors"
              >
                {t(`home.categories.${categoryTranslationKeys[tool.category]}`)}
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-[hsl(var(--color-border))]" />
              <span className="font-medium text-[hsl(var(--color-foreground))] truncate max-w-[200px] sm:max-w-md" aria-current="page">
                {content.title || toolDisplayName}
              </span>
            </nav>

            {/* Tool Header */}
            <ToolHeader tool={tool} content={content} />

            {/* Tool Interface Area */}
            <section
              className="mt-6"
              data-testid="tool-page-interface"
              aria-label="Tool interface"
            >
              {children}
            </section>

            {/* Description Section */}
            <DescriptionSection description={content.description} />

            {/* How to Use Section */}
            <HowToUseSection steps={content.howToUse} />

            {/* Use Cases Section */}
            <UseCasesSection useCases={content.useCases} />

            {/* FAQ Section */}
            <FAQSection faq={content.faq} />

            {/* Related Tools Section */}
            <RelatedToolsSection
              tools={relatedTools}
              locale={locale}
              localizedRelatedTools={localizedRelatedTools}
            />
          </div>
        </main>

        <Footer locale={locale as Locale} />
      </div>
    </ToolProvider>
  );
}

export default ToolPage;
