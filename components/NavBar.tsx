"use client"

import React,{useState,useEffect} from 'react'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {GoogleLogin, googleLogout} from '@react-oauth/google'
import {handleToast} from '../utils/toastify'
import { GetUser } from '@/utils'
import {IoMdAdd} from 'react-icons/io'
import {BiSearch} from 'react-icons/bi'
import authStore from '../zustore/auth-store'
import { AiOutlineLogout } from 'react-icons/ai';
import { IUser } from '../types';

import Logo from '../public/vik-vok-logo2.png'

const NavBar = () => {

  const [searchValue, setSearchValue] = useState('');
  const [user, setUser] = useState<IUser | null>();
  const {addUser,userProfile,removeUser} = authStore()
  const router = useRouter();


  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]); 

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    if(searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };

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
        
        <div className='relative hidden md:block'>
        <form
          onSubmit={handleSearch}
          className='absolute md:static top-10 -left-20  '
        >
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value.trim())}
            className='bg-white hover:bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px]  md:w-[350px] rounded-full  md:top-0'
            placeholder='Accounts and videos'
          />
          <button
            onClick={handleSearch}
            className='absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400'
          >
            <BiSearch />
          </button>
        </form>
      </div>
      <div></div>

        <div>
          {userProfile?
          <div className='flex gap-5 md:gap-10'>
           <Link href='/create' passHref>
              <button className='border-2 border-slate-100 px-2 hover:bg-primary md:px-4 text-md font-semibold flex items-center gap-2 p-2 rounded-lg	'>
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
          onError={()=>handleToast('error','unable to login')}/>
          }
        </div>
    </div>
  )
}

export default NavBar