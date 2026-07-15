export const timelineSerializer = {
  serialize: (timeline: any) => JSON.stringify(timeline),
  deserialize: (data: string) => JSON.parse(data),
};
