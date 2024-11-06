import React from 'react'

function Navbar() {
  return (
    <div className='w-full bg-white'>
        <div className='w-full h-[81px]  flex  items-center px-[120px]'>
          <div className='w-1/3 h-full flex items-center'>
               <ul className='flex gap-x-8'>
                <li className='text-[21px] text-[#202020] '>How it works</li>
                <li className='text-[21px] text-[#202020] '>Policy</li>  
                <li className='text-[21px] text-[#202020] '>Support</li>
                </ul>
             </div>
             <div className='w-1/3 h-full  flex justify-center items-center' >
               <h1 className='text-[36px] text-[#202020] font-bold '>FIRST<span className='font-thin' >LOOK</span></h1>
                
             </div>
             <div className='w-1/3 h-full  flex items-center justify-end'>
             <ul className='flex gap-x-8'>
                    <li className='text-[21px] text-[#202020]'>About </li>
                    <li className='text-[21px] text-[#202020]'>Contact</li>
                </ul>
             </div>

        </div>

    </div>
  )
}

export default Navbar