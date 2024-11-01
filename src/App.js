import React from 'react';
import AppRedirect from './AppRedirect';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div>
      <AppRedirect />
      <Analytics />
    </div>
  );
}

export default App;
