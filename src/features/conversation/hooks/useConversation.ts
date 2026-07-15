import { useState, useEffect, useCallback } from 'react';
import { conversationService } from '../services/conversation.service';
import type { Conversation, ConversationSummary } from '../types/conversation.types';

export function useConversation(id?: string) {
  const [conversations, setConversations] = useState<ConversationSummary[]>([]);
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadConversations = useCallback(async () => {
    setIsLoading(true);
    const data = await conversationService.getConversations();
    setConversations(data);
    setIsLoading(false);
  }, []);

  const loadConversation = useCallback(async (convId: string) => {
    setIsLoading(true);
    const data = await conversationService.getConversation(convId);
    setActiveConversation(data || null);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadConversations();
  }, [loadConversations]);

  useEffect(() => {
    if (id) loadConversation(id);
  }, [id, loadConversation]);

  const create = async (params: Partial<Conversation>) => {
    const newConv = await conversationService.createConversation(params);
    await loadConversations();
    return newConv;
  };

  return {
    conversations,
    activeConversation,
    isLoading,
    refresh: loadConversations,
    create
  };
}
