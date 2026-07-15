export class UsageTracker {
  public track(assetId: string, consumerId: string) {
    console.log(`Usage Tracker: Asset ${assetId} used by ${consumerId}`);
  }
}

export const usageTracker = new UsageTracker();
