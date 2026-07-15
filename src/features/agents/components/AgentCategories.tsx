import React from 'react';
import { AGENT_CATEGORIES } from '../constants/agentCategories';

const AgentCategories: React.FC = () => {
  return (
    <div className="agent-categories">
      <h3>Categories</h3>
      <ul>
        {AGENT_CATEGORIES.map(category => (
          <li key={category}>
            <button className="category-btn">{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgentCategories;
