import React from 'react'

function Header() {
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  return (
    <div className='p-5 bg-black flex justify-between '>
        {/* <h1 className='text-rose-400 text-4xl font-semibold'>M</h1>
        <h1 className='text-fuchsia-500 text-4xl font-semibold'>S</h1>
        <h1 className='text-indigo-500 text-4xl font-semibold'>C</h1> */}
       
    <button type="submit" className="  bg-sky-500/55 font-bold focus:ring-4 focus:outline-none focus:ring-white rounded-lg text-sm px-5 py-2.5  text-center text-white transform transition-transform duration-300 hover:translate-y-1   " onClick={handleLogout}>
                Log out
              </button>
              </div>
   
  )
}

export default Header