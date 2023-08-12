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
        };

        if(session?.user.id)
        fetchPosts();
    },[session?.user.id]);

    const handleEdit = (post)=>{
        router.push(`/update-prompt?id=${post._id}`);
    };

    const handleDelete = async(post) =>{} 

  return (
    <div>Profile</div>
  )
}

export default MyProfile;