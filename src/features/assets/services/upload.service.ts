export const uploadService = {
  uploadFile: async (file: File) => {
    console.log('Upload Service: Uploading', file.name);
    return { id: `file_${Date.now()}`, url: '#' };
  }
};
