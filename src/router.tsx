import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';

// Lazy-load infrequently visited legal pages to keep the main bundle lean
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

// Minimal, accessible loading fallback shown while code-split chunks load
const PageLoader = () => (
  <div
    role="status"
    aria-label="Loading page"
    style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.4)',
      fontSize: '0.875rem',
      letterSpacing: '0.1em',
      fontFamily: 'var(--font-technical, monospace)',
    }}
  >
    LOADING...
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'privacy',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Privacy />
          </Suspense>
        ),
      },
      {
        path: 'terms',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Terms />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
