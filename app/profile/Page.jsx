"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

import Profile from "@components/Profile"

const MyProfile = () => {
    const router = useRouter();
    const { data : session} = useSession();

    const [myPosts, setMyPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async () =>{
            const response = await fetch(`/api/users/${session?.user/id}/posts`);
            const data = await response.json();

            setMyPosts(data);
        }
    })
  return (
    <div>Profile</div>
  )
}

export default MyProfile;