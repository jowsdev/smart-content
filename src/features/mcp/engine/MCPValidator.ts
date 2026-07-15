import type { MCPTool } from '../types/tool.types';

export class MCPValidator {
  validateToolInput(tool: MCPTool, args: Record<string, any>): string[] {
    const errors: string[] = [];
    const schema = tool.inputSchema.properties || {};

    for (const key in schema) {
      if (tool.inputSchema.required?.includes(key) && args[key] === undefined) {
        errors.push(`Argument '${key}' is required.`);
      }
    }

    return errors;
  }
}
