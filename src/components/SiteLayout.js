import React from 'react';
import '../styles/siteLayout.css';

export default function SiteLayout({ children, menu = c => null }) {
  return (
    <div className="site-container">
      <div className="site-container__menu">{menu}</div>
      <div className="site-container__childern">{children}</div>
    </div>
  );
}