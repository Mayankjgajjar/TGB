import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';

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
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'services/:slug',
        element: <ServiceDetail />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
