import React from 'react';
import SiteLayout from './components/SiteLayout';
import './App.css';

export default function App() {
  return (
    <SiteLayout menu={<p>Menu</p>}>
      <>
        <h1>Contents</h1>
        <p>This is a main part of the example layuot</p>
      </>
    </SiteLayout>
  );
}


