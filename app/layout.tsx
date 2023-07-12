"use client"

import './globals.css'
import React,{useState,useEffect} from 'react'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import {GoogleOAuthProvider} from '@react-oauth/google'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 


  // const [isSSR, setIsSSR] = useState(true);

  // //For prevent UI unmatch to server error
  // useEffect(() => {
  //   setIsSSR(false);
  // }, []);  

  // if (isSSR) return null;

  return (
    <html lang="en">
        <body>
          <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}>
          <div className='xl:w-[1200px] m-auto overflow-hidden h-[100vh]'>
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
          </GoogleOAuthProvider>
        </body>
    </html>
  )
}
