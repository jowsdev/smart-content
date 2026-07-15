export const checksum = {
  calculate: async (file: File) => {
    console.log('Calculating checksum for', file.name);
    return 'sha256:simulated_checksum';
  }
};
