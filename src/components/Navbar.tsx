import React from 'react'
import { Separator } from './ui/separator'
import SearchBox from './SearchBox'

const Navbar = () => {
  return (
<div className="nav md:w-[80%]">
  <div className="flex items-center justify-between">
    <div className="flex items-end flex-1">
      <h1 className="font-sans text-gray-500 font-bold text-xl">Wing</h1>
      <span className="text-blue-400">Shop</span>
    </div>
    <SearchBox />
  </div>
  <Separator className="mt-2" />
</div>

  )
}

export default Navbar
