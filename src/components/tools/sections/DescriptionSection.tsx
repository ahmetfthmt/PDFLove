import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Card } from '@/components/ui/Card';
import { sanitizeHtml } from '@/lib/utils/html-sanitizer';

interface DescriptionSectionProps {
    description: string;
}

/**
 * Description section with detailed tool information
 */
export function DescriptionSection({ description }: DescriptionSectionProps) {
    const t = useTranslations();
    const sanitizedDescription = useMemo(() => sanitizeHtml(description), [description]);
    if (!description) return null;

    return (
        <section
            className="mt-10"
            data-testid="tool-page-description"
            aria-labelledby="description-heading"
        >
            <h2
                id="description-heading"
                className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-6"
            >
                {t('tools.about')}
            </h2>
            <Card variant="outlined" size="lg" className="glass-card">
                <div
                    className="prose prose-sm max-w-none text-[hsl(var(--color-foreground))/0.8]"
                    dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                />
            </Card>
        </section>
    );
}
