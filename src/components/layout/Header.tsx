import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>{title}</h1>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search..." className="search-bar" />
        <button className="btn-new-project">New Project</button>
        <div className="user-avatar">
          <span className="avatar-placeholder">JD</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
