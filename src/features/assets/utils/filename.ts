export const filename = {
  sanitize: (name: string) => name.replace(/[^a-z0-9.]/gi, '_').toLowerCase(),
};
