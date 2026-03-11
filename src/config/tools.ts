import { Tool, ToolCategory } from '@/types/tool';
import { organizeManageTools } from './tools/organize-manage';
import { optimizeRepairTools } from './tools/optimize-repair';
import { editAnnotateTools } from './tools/edit-annotate';
import { convertToPdfTools } from './tools/convert-to-pdf';
import { convertFromPdfTools } from './tools/convert-from-pdf';
import { securePdfTools } from './tools/secure-pdf';

/**
 * All tools configuration
 * Aggregated from modular category files
 */
export const tools: Tool[] = [
  ...organizeManageTools,
  ...optimizeRepairTools,
  ...editAnnotateTools,
  ...convertToPdfTools,
  ...convertFromPdfTools,
  ...securePdfTools,
];

/**
 * Get all tools (excluding disabled tools)
 */
export function getAllTools(): Tool[] {
  return tools.filter(tool => !tool.disabled);
}

/**
 * Get all tools including disabled ones (for admin)
 */
export function getAllToolsIncludingDisabled(): Tool[] {
  return tools;
}

/**
 * Get tool by ID
 */
export function getToolById(id: string): Tool | undefined {
  return tools.find((tool) => tool.id === id && !tool.disabled);
}

/**
 * Get tool by slug
 */
export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug && !tool.disabled);
}

/**
 * Get tools by category (excluding disabled tools)
 */
export function getToolsByCategory(category: ToolCategory): Tool[] {
  return tools.filter((tool) => tool.category === category && !tool.disabled);
}

/**
 * Get all tool IDs
 */
export function getAllToolIds(): string[] {
  return tools.map((tool) => tool.id);
}

/**
 * Check if a tool ID exists
 */
export function toolExists(id: string): boolean {
  return tools.some((tool) => tool.id === id);
}

/**
 * Popular tool IDs - curated list of commonly used tools
 * These tools remain in their original categories
 */
export const POPULAR_TOOL_IDS = [
  'merge-pdf',
  'split-pdf',
  'compress-pdf',
  'edit-pdf',
  'jpg-to-pdf',
  'pdf-to-jpg',
  'sign-pdf',
  'encrypt-pdf',
];

/**
 * Get popular tools
 * Returns a curated list of commonly used tools
 */
export function getPopularTools(): Tool[] {
  return POPULAR_TOOL_IDS
    .map(id => getToolById(id))
    .filter((tool): tool is Tool => tool !== undefined);
}


