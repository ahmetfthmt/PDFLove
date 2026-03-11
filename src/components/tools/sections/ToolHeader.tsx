import { Tool, ToolContent } from '@/types/tool';
import { getToolIcon } from '@/config/icons';
import { FavoriteButton } from '@/components/ui/FavoriteButton';

interface ToolHeaderProps {
    tool: Tool;
    content: ToolContent;
}

/**
 * Tool header with icon, name, and brief description
 */
export function ToolHeader({ tool, content }: ToolHeaderProps) {
    const toolName = tool.id
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const IconComponent = getToolIcon(tool.icon);

    return (
        <header className="text-center" data-testid="tool-page-header" itemScope itemType="https://schema.org/SoftwareApplication">
            <meta itemProp="applicationCategory" content="UtilitiesApplication" />
            <meta itemProp="operatingSystem" content="Web Browser" />
            <meta itemProp="offers" itemScope itemType="https://schema.org/Offer" content="" />
            <meta itemProp="price" content="0" />
            <meta itemProp="priceCurrency" content="USD" />
            <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(var(--color-primary)/0.1)] to-[hsl(var(--color-accent)/0.1)] mb-4 shadow-inner"
                aria-hidden="true"
            >
                <IconComponent className="w-8 h-8 text-[hsl(var(--color-primary))]" />
            </div>
            <h1
                className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-2"
                data-testid="tool-page-title"
                itemProp="name"
            >
                {content.title || toolName}
            </h1>
            <p
                className="text-lg text-[hsl(var(--color-muted-foreground))] max-w-2xl mx-auto leading-relaxed mb-4"
                data-testid="tool-page-subtitle"
                itemProp="description"
            >
                {content.metaDescription}
            </p>
            <div className="flex items-center justify-center">
                <FavoriteButton toolId={tool.id} size="lg" showLabel />
            </div>
        </header>
    );
}
