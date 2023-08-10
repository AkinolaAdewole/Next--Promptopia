import { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";


const Nav = () => {

    const [providers, setProviders] = useState(null);
    const [toggleDropDown, setToggleDropDown] = useState(false);

    useEffect(()=>{
        (async()=>{
        })
    })
  return (
    <div>Nav</div>
  )
}

export default Nav