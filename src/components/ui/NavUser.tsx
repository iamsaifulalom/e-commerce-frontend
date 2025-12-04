"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

type NavUserProps = {
  name: string
  email: string
  avatar: string

}
export function NavUser({ name, email, avatar }: NavUserProps) {

  return (
    <div className="flex w-full gap-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src={avatar} alt="@shop" />
        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">{name}</span>
        <span className="truncate text-xs">{email}</span>
      </div>
    </div>
  )
}