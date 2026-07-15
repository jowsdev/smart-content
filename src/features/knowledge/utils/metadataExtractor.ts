export const extractMetadata = (_file: File): Record<string, any> => {
  return {
    filename: _file.name,
    size: _file.size,
    type: _file.type,
    lastModified: _file.lastModified
  };
};
