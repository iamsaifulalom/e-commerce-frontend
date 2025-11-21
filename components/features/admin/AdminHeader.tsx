import { BellIcon, MenuIcon, SearchIcon } from 'lucide-react'
import React from 'react'

export default function AdminHeader() {
    return (
        <div className="w-full flex mb-2 justify-between items-center py-4">
            <div className='hidden lg:block'>
                <h1 className="text-2xl font-bold"> Wellcome back, Zak!</h1>
                <p className="text-muted-foreground text-sm">Here's what happaning with your store!</p>
            </div>
            <MenuIcon className='lg:hidden'/>
            <div className='lg:hidden'>
                Shop icon
            </div>
            <div className="flex gap-3 items-center">
                <BellIcon size={30} className="border rounded-full p-1.5 cursor-pointer" />
                <SearchIcon size={30} className="border rounded-full p-1.5 cursor-pointer" />
            </div>
        </div>)
}
