import React from 'react';
import '../styles/callout.css';

export default function Callout({ children = '' }) {
  return (
    <div className='callout'>
      <p>{children}</p>
    </div>
  );
}