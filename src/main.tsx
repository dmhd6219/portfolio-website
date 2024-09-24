import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PortfolioLayout from '@/components/router/portfolio/layout.tsx';
import Portfolio from '@/components/router/portfolio/root/page.tsx';
import ApiLayout from '@/components/router/api/layout.tsx';
import NowPlayingRedirectPage from '@/components/router/api/now-playing/redirect/page.tsx';

const router = createBrowserRouter([
    {
        element: <PortfolioLayout />,
        children: [
            {
                path: '/',
                element: <Portfolio />,
            },
        ],
    },

    {
        element: <ApiLayout />,
        children: [
            {
                path: '/api/now-playing/redirect',
                element: <NowPlayingRedirectPage />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
