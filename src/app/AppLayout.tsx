import React from 'react';
import { Outlet, useMatches } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const AppLayout: React.FC = () => {
  const matches = useMatches();

  // Find the deepest match that has a title in its handle
  const currentMatch = [...matches].reverse().find((match) =>
    match.handle && (match.handle as { title?: string }).title
  );

  const pageTitle = currentMatch
    ? (currentMatch.handle as { title: string }).title
    : 'Smart Content';

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-container">
        <Header title={pageTitle} />
        <main className="content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
