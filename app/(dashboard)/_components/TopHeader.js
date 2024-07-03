import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const TopHeader = ({ toggleSidebar }) => {
  return (
    <div className='flex p-5 border-b items-center justify-between md:justify-end'>
      <AlignJustify className='md:hidden cursor-pointer' onClick={toggleSidebar} />
      <Image src='/logo.svg' height={100} width={150} alt="Logo" className='md:hidden' onClick='/' />
      <UserButton />
    </div>
  )
}

export default TopHeader