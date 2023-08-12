"use client"

import {useState, useEffect} from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const {data : session} = useSession();
  return (
    <div>PromptCard</div>
  )
}

export default PromptCard