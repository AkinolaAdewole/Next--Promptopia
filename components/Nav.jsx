"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";


const Nav = () => {
    
    const {data : session} = useSession();
    const isUserLoggedIn  = true;
    
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(()=>{
        (async()=>{
          const res = await getProviders();
          setProviders(res);
        })
    },[]);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
        src='/assets/images/logo.svg'
        alt='logo'
        width={30}
        height={30}
        className='object_contain'
         />
         <p className='logo_text'>Promptopia</p>
      </Link>

      {/*Mobile Navigation */}
      <div className='sm:flex hidden'></div>
    </nav>

    // mobile diveces


  )
}

export default Nav