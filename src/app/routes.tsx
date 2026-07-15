import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import AppLayout from './AppLayout';
import DashboardPage from '../features/dashboard/DashboardPage';
import ComingSoonPage from '../features/dashboard/ComingSoonPage';
import { AgentsPage } from '../features/agents';
import { ProfilesPage, ProfileDetailsPage } from '../features/profiles';
import { ChatPage } from '../features/conversation';
import { MCPPage } from '../features/mcp';
import { BrandPage } from '../features/brand';
import VideoStudioPage from '../features/video/pages/VideoStudioPage';
import { AnimationStudioPage } from '../features/animation';
import { AssetLibraryPage } from '../features/assets';
import { SceneBuilderPage } from '../features/scenes';
import { ImageStudioPage } from '../features/ai/image';
import { AudioStudioPage } from '../features/audio';
import { CaptionStudioPage } from '../features/captions';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
        handle: { title: 'Dashboard' },
      },
      {
        path: 'agents',
        element: <AgentsPage />,
        handle: { title: 'Agent Framework' },
      },
      {
        path: 'library',
        element: <AssetLibraryPage />,
        handle: { title: 'Media Hub' },
      },
      {
        path: 'brand',
        element: <BrandPage />,
        handle: { title: 'Brand Kits' },
      },
      {
        path: 'projects',
        element: <ProfilesPage />,
        handle: { title: 'Projects' },
      },
      {
        path: 'profiles/:id',
        element: <ProfileDetailsPage />,
        handle: { title: 'Profile Editor' },
      },
      {
        path: 'ai',
        element: <ChatPage />,
        handle: { title: 'AI Chat' },
      },
      {
        path: 'ai-image',
        element: <ImageStudioPage />,
        handle: { title: 'AI Image Studio' },
      },
      {
        path: 'captions',
        element: <CaptionStudioPage />,
        handle: { title: 'Caption Studio' },
      },
      {
        path: 'audio',
        element: <AudioStudioPage />,
        handle: { title: 'Audio Studio' },
      },
      {
        path: 'video-studio',
        element: <VideoStudioPage />,
        handle: { title: 'Video Studio' },
      },
      {
        path: 'animation-studio',
        element: <AnimationStudioPage />,
        handle: { title: 'Animation Studio' },
      },
      {
        path: 'prompts',
        element: <ComingSoonPage title="Prompt Builder" />,
        handle: { title: 'Prompt Builder' },
      },
      {
        path: 'templates',
        element: <ComingSoonPage title="Templates" />,
        handle: { title: 'Templates' },
      },
      {
        path: 'scenes',
        element: <SceneBuilderPage />,
        handle: { title: 'Scene Builder' },
      },
      {
        path: 'mcp',
        element: <MCPPage />,
        handle: { title: 'Model Context Protocol' },
      },
      {
        path: 'history',
        element: <ComingSoonPage title="History" />,
        handle: { title: 'History' },
      },
      {
        path: 'settings',
        element: <ComingSoonPage title="Settings" />,
        handle: { title: 'Settings' },
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
