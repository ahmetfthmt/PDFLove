import { WorkflowTemplate } from '@/types/workflow';
import { commonWorkflows } from './workflows/common';
import { conversionWorkflows } from './workflows/conversion';
import { optimizationWorkflows } from './workflows/optimization';
import { securityWorkflows } from './workflows/security';

/**
 * Workflow Templates
 * Aggregated from modular category files
 */
export const workflowTemplates: WorkflowTemplate[] = [
    ...commonWorkflows,
    ...conversionWorkflows,
    ...optimizationWorkflows,
    ...securityWorkflows,
];

export const getTemplatesByCategory = (category: WorkflowTemplate['category']) => {
    return workflowTemplates.filter(t => t.category === category);
};

export const getTemplateById = (id: string) => {
    return workflowTemplates.find(t => t.id === id);
};
