import { UserButton } from '@clerk/nextjs'

import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 bg-white flex justify-between items-center'>
      
      <div className='flex gap-5 items-center'>
        <h2 className='bg-primary p-1 rounded-full text-sm text-white px-2'>
        🔥 Join Membership just for $9.99/Month</h2>
      
      </div>
      <UserButton />
    </div>
  )
}

export default Header