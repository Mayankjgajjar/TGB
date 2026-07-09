import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import PageLoader from './components/layout/PageLoader';
import Home from './pages/Home';

// Lazy-load all non-home pages to keep the main bundle lean
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Gallery = lazy(() => import('./pages/Gallery'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Warranty = lazy(() => import('./pages/Warranty'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      // ── Primary pages ────────────────────────────────────────────────────────
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageLoader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'services',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Contact />
          </Suspense>
        ),
      },
      // ── Gallery & Project routes ─────────────────────────────────────────────
      {
        path: 'gallery',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Gallery />
          </Suspense>
        ),
      },
      {
        path: 'projects',
        element: <Navigate to="/gallery" replace />,
      },
      {
        path: 'projects/:projectId',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProjectDetail />
          </Suspense>
        ),
      },
      // ── Service detail ───────────────────────────────────────────────────────
      {
        path: 'services/:serviceId',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ServiceDetail />
          </Suspense>
        ),
      },
      // ── Legal & utility ──────────────────────────────────────────────────────
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
      {
        path: 'claim-warranty',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Warranty />
          </Suspense>
        ),
      },
      // ── Legacy hash URL redirects → proper page routes ───────────────────────
      // Old bookmarks and backlinks to /#section are preserved via redirects.
      {
        path: 'home',
        element: <Navigate to="/" replace />,
      },
      {
        path: 'industries',
        element: <Navigate to="/about" replace />,
      },
      {
        path: 'process',
        element: <Navigate to="/about" replace />,
      },
      // ── Catch-all 404 — must be LAST ─────────────────────────────────────────
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
