"use client"

import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {GoogleLogin, googleLogout} from '@react-oauth/google'
import { GetUser } from '@/utils'
import {IoMdAdd} from 'react-icons/io'
import authStore from '../zustore/auth-store'
import { AiOutlineLogout } from 'react-icons/ai';
import { IUser } from '../types';

import Logo from '../public/vik-vok-logo2.png'

const NavBar = () => {

  const [user, setUser] = useState<IUser | null>();

  const {addUser,userProfile,removeUser} = authStore()

  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]);

  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
        <Link href='/' passHref>
          <div className='w-[100px] md:w-[129px] md:h-[30px] h-[38px]'>
            <Image
            className="cursor-pointer"
            src={Logo}
            style={{borderRadius:'8px'}}
            alt='Tik-Tok'/>
          </div>
        </Link>
        <div>Search</div>
        <div>
          {userProfile?
          <div className='flex gap-5 md:gap-10'>
           <Link href='/create' passHref>
              <button className='border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2'>
                <IoMdAdd className='text-xl' />{' '}
                <span className='hidden md:block'>Create</span>
              </button>
            </Link>
            {user?.image && (
              <Link href={`/profile/${user._id}`} passHref>
                <div>
                  <Image
                    className='rounded-full cursor-pointer'
                    src={user.image}
                    alt='user'
                    width={40}
                    height={40}
                  />
                </div>
              </Link>
            )}
              <button
                type='button'
                className=' border-2 p-2 rounded-full cursor-pointer outline-none shadow-md'
                onClick={() => {
                  googleLogout();
                  removeUser();
                }}
              >
                <AiOutlineLogout color='red' fontSize={21} />
              </button>
          </div>
          :<GoogleLogin 
          onSuccess={(res)=>GetUser(res,addUser)}
          onError={()=>console.log('Error')}/>
          }
        </div>
    </div>
  )
}

export default NavBar