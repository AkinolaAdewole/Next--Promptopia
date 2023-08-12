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

    if(post.creator._id === session?.user.id){
      return router.push("/profile");
    }

  }

  return (
    <div>PromptCard</div>
  )
}

export default PromptCard