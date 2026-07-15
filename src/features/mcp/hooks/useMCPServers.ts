import { useState, useEffect } from 'react';
import { mcpService } from '../services/mcp.service';
import type { MCPServer } from '../types/server.types';
import { initializeMCPRegistry } from '../registry/serverRegistry';

export function useMCPServers() {
  const [servers, setServers] = useState<MCPServer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize registry with mock data for the demo/dev
    initializeMCPRegistry();

    async function load() {
      const data = await mcpService.loadServers();
      setServers(data);
      setIsLoading(false);
    }
    load();
  }, []);

  const refresh = async () => {
    const data = await mcpService.loadServers();
    setServers(data);
  };

  return { servers, isLoading, refresh };
}
