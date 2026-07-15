import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'Agents', path: '/agents' },
    { label: 'Projects', path: '/projects' },
    { label: 'AI Chat', path: '/ai' },
    { label: 'AI Image', path: '/ai-image' },
    { label: 'Audio Studio', path: '/audio' },
    { label: 'Video Studio', path: '/video-studio' },
    { label: 'Caption Studio', path: '/captions' },
    { label: 'Animation Studio', path: '/animation-studio' },
    { label: 'Prompt Builder', path: '/prompts' },
    { label: 'Templates', path: '/templates' },
    { label: 'Scene Builder', path: '/scenes' },
    { label: 'Brand Kits', path: '/brand' },
    { label: 'Media Hub', path: '/library' },
    { label: 'MCP Layer', path: '/mcp' },
    { label: 'History', path: '/history' },
    { label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Smart Content</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? 'active' : ''}
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
