"use client"

import {useState, useEffect} from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const {data : session} = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () =>{
    console.log(post);

    if(post.creator._id === session?.user.id)
      return router.push("/profile");
      router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  }

  const handleCopy =()=>{
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(()=>{setCopied(false), 3000})
  }

  return (
    <div>PromptCard</div>
  )
}

export default PromptCard