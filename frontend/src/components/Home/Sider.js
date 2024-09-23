import React from 'react'

function Sider() {
  return (
    <div className='fixed pl-0 bottom-0 '>
        <div className='flex flex-col items-center '>
            <div className='flex flex-col gap-3'>
            <i class="ri-facebook-circle-line text-gray-400 text-xl"></i>
            <a href='/'></a>
            <i class="ri-mail-line text-gray-400 text-xl">

            </i>
            <i class="ri-instagram-line text-gray-400 text-xl"></i>
            <i class="ri-linkedin-line text-gray-400 text-xl"></i>
            </div>
            <div className='w-[1px] h-52 bg-[#125f63]'></div>
        </div>
    </div>
  )
}

export default Sider