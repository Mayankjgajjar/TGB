import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { initTelemetry } from './lib/telemetry';

export const App: React.FC = () => {
  useEffect(() => {
    initTelemetry();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
