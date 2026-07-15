import { useState, useCallback } from 'react';

export interface UploadItem {
  id: string;
  file: File;
  progress: number;
  status: 'pending' | 'uploading' | 'completed' | 'error';
}

export const useUploadQueue = () => {
  const [queue, setQueue] = useState<UploadItem[]>([]);

  const addToQueue = useCallback((files: File[]) => {
    const items: UploadItem[] = files.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      progress: 0,
      status: 'pending',
    }));
    setQueue(prev => [...prev, ...items]);
  }, []);

  return { queue, addToQueue };
};
