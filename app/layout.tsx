"use client"

import './globals.css'
import React,{useState,useEffect} from 'react'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import { ToastContainer } from 'react-toastify';
import {GoogleOAuthProvider} from '@react-oauth/google'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallBack from '../components/Error'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 

  const stage = process.env.NODE_ENV
  const [isSSR, setIsSSR] = useState(true);


  //For prevent UI unmatch to server error
  useEffect(() => {
    if(stage !== 'development') return
    setIsSSR(false);
  }, []);  

  if (isSSR && stage !== 'production') return null;

  return (
    <html lang="en">
        <body>
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
          <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}>
          <div className='xl:w-full m-auto overflow-hidden h-[100vh]'>
            <NavBar/>
             <div className='flex gap-6 md:gap-20 '>
              <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto no-scrollbar'>
              <SideBar/>
              </div>
              <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
                {children}
              </div>
             </div>
            </div>
            <ToastContainer/>
          </GoogleOAuthProvider>
          </ErrorBoundary>
        </body>
    </html>
  )
}
