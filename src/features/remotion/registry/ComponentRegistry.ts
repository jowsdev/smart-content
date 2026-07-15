import React from 'react';

export class ComponentRegistry {
  private static components: Map<string, React.ComponentType<any>> = new Map();

  static register(id: string, component: React.ComponentType<any>) {
    this.components.set(id, component);
  }

  static get(id: string) {
    return this.components.get(id);
  }

  static getAll() {
    return Array.from(this.components.keys());
  }
}
