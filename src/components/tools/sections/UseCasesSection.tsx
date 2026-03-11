import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/Card';
import { UseCase } from '@/types/tool';

interface UseCasesSectionProps {
    useCases: UseCase[];
}

/**
 * Use cases section with practical scenarios
 */
export function UseCasesSection({ useCases }: UseCasesSectionProps) {
    const t = useTranslations();
    if (!useCases || useCases.length === 0) return null;

    return (
        <section
            className="mt-10"
            data-testid="tool-page-use-cases"
            aria-labelledby="use-cases-heading"
        >
            <h2
                id="use-cases-heading"
                className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-6"
            >
                {t('tools.useCases')}
            </h2>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                data-testid="use-cases-grid"
            >
                {useCases.map((useCase, index) => (
                    <Card
                        key={index}
                        variant="default"
                        className="glass-card hover:shadow-lg transition-all duration-300"
                        data-testid={`use-case-${index}`}
                    >
                        <div className="flex items-start gap-4">
                            <div
                                className="flex-shrink-0 w-12 h-12 rounded-xl bg-[hsl(var(--color-secondary)/0.5)] flex items-center justify-center"
                                aria-hidden="true"
                            >
                                <div className="w-6 h-6 text-[hsl(var(--color-secondary-foreground))] flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-1">
                                    {useCase.title}
                                </h3>
                                <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                                    {useCase.description}
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
