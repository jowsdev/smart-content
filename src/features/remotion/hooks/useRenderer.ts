import { useState, useCallback } from 'react';
import { RenderManager } from '../renderer/RenderManager';
import { RenderJob, RenderSettings } from '../types/render.types';

export const useRenderer = () => {
  const [manager] = useState(() => new RenderManager());
  const [jobs, setJobs] = useState<RenderJob[]>([]);

  const render = useCallback(async (compositionId: string, settings: RenderSettings) => {
    const job = await manager.startRender(compositionId, settings);
    setJobs(prev => [...prev, job]);
    return job;
  }, [manager]);

  return {
    render,
    jobs,
  };
};
