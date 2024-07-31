import React from 'react'

export default function page() {
  return (
    <footer className='w-full h-[655px] bg-[rgba(22,5,48,1)] mt-10'>
      <div className='w-[90%] h-full flex items-center mx-auto my-0'>
        <div className='w-[50%] h-[90%]'>
          <h2 className='text-[58px] font-semibold leading-[70.19px] text-left text-[rgba(242,242,242,1)] mt-[20px]'>Let's start working to build a brighter future.</h2>
          <p className='text-base font-normal leading-7 w-[80%] mt-4 text-left text-[rgba(255,255,255,1)]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum posuere eget elementum vulputate elementum viverra sapien tellus aenean.</p>
          <ul className='flex items-center justify-between w-[30%] mt-8 text-[rgba(224,207,252,1)] h-[20px]'>
            <li>Lb</li>
            <li>In</li>
            <li>Tw</li>
            <li>Ln</li>
          </ul>
          <p className='mt-[180px] font-semibold text-xl text-white'>New Business</p>
        </div>
        <div className='w-2/4 h-[80%] mt-20'>
          <div className='w-[90%] h-[70px] flex border border-[rgba(224,207,252,1)] ml-14'>
            <input type="text" placeholder='Join our mailing list' className='outline-none bg-transparent pl-4 text-[21px] font-normal leading-9 text-[rgba(255,255,255,1)] placeholder-[rgba(255,255,255,1)]'/>
            <button type='submit' className='text-[21px] font-normal pl-28 leading-9 text-[rgba(255,255,255,1)]'>Submit</button>
          </div>
          <p className='text-[rgba(242,242,242,1)] text-sm font-normal leading-[38px] mt-[415px] ml-[320px]'>Copyright 2021. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
