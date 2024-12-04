import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from "./Comp_Core/Root"
import AuthProvider from './Comp_Core/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'


createRoot(document.getElementById('root')).render(
 <HelmetProvider>
   <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
 </HelmetProvider>
)
