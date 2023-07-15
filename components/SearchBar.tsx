import React from 'react' 
import {BiSearch} from 'react-icons/bi'


interface IProps{
  handleSearch:(e: any) => void
  setSearchValue:(val:any)=>void
  searchValue:string
}

const SearchBar = ({handleSearch,setSearchValue,searchValue}:IProps) => {
  return (
   <>
   <form
          onSubmit={handleSearch}
          className='m-auto'
        >
          <input
            value={searchValue||''}
            onChange={(e) => setSearchValue(e.target.value.trim())}
            className='bg-white hover:bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-full rounded-full'
            placeholder='Accounts and videos'
          />
          <button
            onClick={handleSearch}
            className='absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400'
          >
            <BiSearch className='hover:scale-110' />
          </button> 
        </form></>
  )
}

export default SearchBar