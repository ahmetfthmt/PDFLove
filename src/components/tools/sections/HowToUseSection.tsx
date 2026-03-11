import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/Card';
import { HowToStep } from '@/types/tool';

interface HowToUseSectionProps {
    steps: HowToStep[];
}

/**
 * How to use section with numbered steps
 */
export function HowToUseSection({ steps }: HowToUseSectionProps) {
    const t = useTranslations();
    if (!steps || steps.length === 0) return null;

    return (
        <section
            className="mt-10"
            data-testid="tool-page-how-to-use"
            aria-labelledby="how-to-use-heading"
            itemScope
            itemType="https://schema.org/HowTo"
        >
            <h2
                id="how-to-use-heading"
                className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-6"
                itemProp="name"
            >
                {t('tools.howToUse')}
            </h2>
            <ol className="grid gap-6 md:grid-cols-3" data-testid="how-to-use-steps">
                {steps.map((step) => (
                    <li
                        key={step.step}
                        className="flex flex-col h-full"
                        data-testid={`how-to-step-${step.step}`}
                        id={`step-${step.step}`}
                        itemScope
                        itemProp="step"
                        itemType="https://schema.org/HowToStep"
                    >
                        <meta itemProp="position" content={String(step.step)} />
                        <Card className="flex-1 h-full glass-card border-[hsl(var(--color-border))/0.6] hover:border-[hsl(var(--color-primary)/0.3)] transition-colors">
                            <div
                                className="w-10 h-10 rounded-xl bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] flex items-center justify-center font-bold text-lg mb-4"
                                aria-hidden="true"
                            >
                                {step.step}
                            </div>
                            <h3 className="text-lg font-semibold text-[hsl(var(--color-foreground))] mb-2" itemProp="name">
                                {step.title}
                            </h3>
                            <p className="text-sm text-[hsl(var(--color-muted-foreground))]" itemProp="text">
                                {step.description}
                            </p>
                        </Card>
                    </li>
                ))}
            </ol>
        </section>
    );
}
