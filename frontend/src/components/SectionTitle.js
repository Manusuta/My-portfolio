import React from 'react'

function SectionTitle({title,
}) {
  return (
    <div className='flex gap-10 items-center py-10 pl-2'>
        <h1 className='text-4xl from-white via-gray-600 to-black bg-gradient-to-r bg-clip-text text-transparent font-bold'>{title}</h1>
        <div className='w-60 h-[1px] bg-white'></div>
    </div>
  )
}

export default SectionTitle