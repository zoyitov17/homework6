import React from 'react';
import Image from 'next/image';
import Logo from '../../images/logo.svg';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='w-[90%] h-[60px] flex items-center justify-between mx-auto my-0 mt-5'>
      <ul className='w-[15%] h-[90%] flex items-center justify-evenly'>
        <li>
          <Image src={Logo} alt="Site Logo" width={35} height={35} />
        </li>
        <li className='text-[rgba(133,64,245,1)] text-lg font-bold leading-[38px] tracking-[0.01em]'><p>Talk</p></li>
        <li className='text-black text-lg font-bold leading-[38px] tracking-[0.01em]'><p>Business</p></li>
      </ul>
      <ul className='w-[50%] text-base font-semibold leading-7 h-full flex items-center justify-between'>
        <Link href="/home">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/services">
          <li>Services</li>
        </Link>
        <Link href="/system">
          <li>Systems</li>
        </Link>
        <li>
          <button className='w-36 rounded-[150px] text-[rgba(102,16,242,1)] h-[55px] text-base font-semibold leading-7 text-center border-2 border-[rgba(102,16,242,1)]'>
            Contact us 
          </button>
        </li>
      </ul>
    </div>
  );
}
