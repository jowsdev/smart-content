import type { MemoryEntry } from '../types/memory.types';

export class ConversationMemory {
  private entries: MemoryEntry[] = [];

  addEntry(entry: MemoryEntry) {
    this.entries.push(entry);
  }

  getEntriesByLevel(level: MemoryEntry['level']) {
    return this.entries.filter(e => e.level === level);
  }

  clearConversationMemory(conversationId: string) {
    this.entries = this.entries.filter(e => !(e.level === 'conversation' && e.id === conversationId));
  }
}
