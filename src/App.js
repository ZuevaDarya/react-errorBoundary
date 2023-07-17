import React from 'react';
import SiteLayout from './components/SiteLayout';
import Callout from './components/Callout';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorScreen from './components/ErrorScreen';

import './App.css';

export default function App() {
  const BreakThings = () => {
    throw Error("We intentionally broke something")
  }

  return (
    <SiteLayout menu={
      <ErrorBoundary fallback={ErrorScreen}>
        <p>{'<Menu />'}</p>
      </ErrorBoundary>
    }
    >
      <div>
        <ErrorBoundary fallback={ErrorScreen}>
          <Callout>{'<Callout />'}
            {/* <BreakThings /> */}
          </Callout>
        </ErrorBoundary>

        <ErrorBoundary fallback={ErrorScreen}>
          <h1>{'<Contents />'}</h1>
          <p>This is a main part of the example layuot</p>
        </ErrorBoundary>
      </div>
    </SiteLayout>
  );
}


