import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Files = () => {
    console.log("Files component is rendering");

  return (
    <div>Files
    <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default Files