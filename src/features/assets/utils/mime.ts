export const mime = {
  getType: (filename: string) => {
    const ext = filename.split('.').pop();
    switch (ext) {
      case 'png': return 'image/png';
      case 'mp4': return 'video/mp4';
      default: return 'application/octet-stream';
    }
  }
};
