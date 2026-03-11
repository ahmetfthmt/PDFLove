import { useTranslations } from 'next-intl';
import { Tool, ToolCategory } from '@/types/tool';
import { Card } from '@/components/ui/Card';
import { getToolIcon } from '@/config/icons';

const categoryTranslationKeys: Record<ToolCategory, string> = {
    'edit-annotate': 'editAnnotate',
    'convert-to-pdf': 'convertToPdf',
    'convert-from-pdf': 'convertFromPdf',
    'organize-manage': 'organizeManage',
    'optimize-repair': 'optimizeRepair',
    'secure-pdf': 'securePdf',
};

interface RelatedToolsSectionProps {
    tools: Tool[];
    locale: string;
    localizedRelatedTools: Record<string, { title: string; description: string }>;
}

/**
 * Related tools section
 */
export function RelatedToolsSection({ tools, locale, localizedRelatedTools }: RelatedToolsSectionProps) {
    const t = useTranslations();
    if (!tools || tools.length === 0) return null;

    return (
        <section
            className="mt-10"
            data-testid="tool-page-related-tools"
            aria-labelledby="related-tools-heading"
        >
            <h2
                id="related-tools-heading"
                className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-6"
            >
                {t('tools.relatedTools')}
            </h2>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                data-testid="related-tools-grid"
            >
                {tools.map(tool => {
                    const localized = localizedRelatedTools[tool.id];
                    const toolName = localized?.title || tool.id
                        .split('-')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');

                    const IconComponent = getToolIcon(tool.icon);
                    const categoryName = t(`home.categories.${categoryTranslationKeys[tool.category]}`);

                    return (
                        <a
                            key={tool.id}
                            href={`/${locale}/tools/${tool.slug}`}
                            className="block group"
                        >
                            <Card hover clickable className="h-full glass-card transition-all duration-300 group-hover:-translate-y-1">
                                <div className="flex items-center gap-4">
                                    <div
                                        className="flex-shrink-0 w-12 h-12 rounded-xl bg-[hsl(var(--color-primary)/0.1)] flex items-center justify-center group-hover:bg-[hsl(var(--color-primary))] transition-colors duration-300"
                                        aria-hidden="true"
                                    >
                                        <IconComponent className="w-6 h-6 text-[hsl(var(--color-primary))] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <span className="font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                                            {toolName}
                                        </span>
                                        <span className="text-xs text-[hsl(var(--color-muted-foreground))]">
                                            {categoryName}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
