import { useState, useEffect } from 'react';
import { mcpRegistry } from '../engine/MCPRegistry';
import type { MCPTool } from '../types/tool.types';

export function useMCPTools(serverId?: string) {
  const [tools, setTools] = useState<MCPTool[]>([]);

  useEffect(() => {
    if (serverId) {
      setTools(mcpRegistry.findToolsByServer(serverId));
    }
  }, [serverId]);

  return { tools };
}
