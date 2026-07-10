import { createBrowserRouter, Navigate } from 'react-router-dom'
import { RootLayout } from '@/components/layout/RootLayout'
import { Home } from '@/pages/Home'
import { CollectionsPage } from '@/pages/CollectionsPage'
import { ProductPage } from '@/pages/ProductPage'
import { About } from '@/pages/About'
import { Gallery } from '@/pages/Gallery'
import { Contact } from '@/pages/Contact'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'collections', element: <CollectionsPage /> },
      { path: 'collections/:slug', element: <CollectionsPage /> },
      { path: 'products/:slug', element: <ProductPage /> },
      { path: 'about', element: <About /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])
