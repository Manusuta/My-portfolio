import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]'>
        <div className=' flex gap-5 text-3xl font-semibold'>
            <h1 className="text-black">M</h1>
            <h1 className="text-white">S</h1>
            <h1 className="text-sky-500/55">C</h1>
        </div>
    </div>
  )
}

export default Loader