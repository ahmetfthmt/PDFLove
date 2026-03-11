import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/Card';
import { FAQ } from '@/types/tool';

interface FAQSectionProps {
    faq: FAQ[];
}

/**
 * FAQ section with common questions and answers
 */
export function FAQSection({ faq }: FAQSectionProps) {
    const t = useTranslations();
    if (!faq || faq.length === 0) return null;

    return (
        <section
            className="mt-10"
            data-testid="tool-page-faq"
            aria-labelledby="faq-heading"
            itemScope
            itemType="https://schema.org/FAQPage"
        >
            <h2
                id="faq-heading"
                className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-6"
            >
                {t('tools.faq')}
            </h2>
            <div className="space-y-4" data-testid="faq-list">
                {faq.map((item, index) => (
                    <Card
                        key={index}
                        variant="outlined"
                        className="glass-card"
                        data-testid={`faq-item-${index}`}
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                    >
                        <h3 className="font-semibold text-[hsl(var(--color-foreground))]" itemProp="name">
                            {item.question}
                        </h3>
                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <p className="mt-2 text-sm text-[hsl(var(--color-muted-foreground))]" itemProp="text">
                                {item.answer}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
