import { useState, useCallback } from 'react';
import { mcpService } from '../services/mcp.service';
import type { MCPExecutionResponse } from '../types/execution.types';

export function useMCP() {
  const [isExecuting, setIsExecuting] = useState(false);
  const [lastResponse, setLastResponse] = useState<MCPExecutionResponse | null>(null);

  const execute = useCallback(async (serverId: string, toolId: string, args: Record<string, any>) => {
    setIsExecuting(true);
    try {
      const res = await mcpService.execute(serverId, toolId, args);
      setLastResponse(res);
      return res;
    } finally {
      setIsExecuting(false);
    }
  }, []);

  return { execute, isExecuting, lastResponse };
}
