'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaFacebookSquare } from 'react-icons/fa'
import { url } from '@/constants'
import { Logo } from '@/components'
import { FcGoogle } from 'react-icons/fc'
const Header = () => {
    const router = useRouter()

    return (
        <div className='flex justify-between h-fit w-full bg-[#fff0f0] p-2 px-10'>
            {/* LOGO Section*/}
            <Logo />

            {/* OPTIONS Section*/}
            <div className=' flex gap-4 items-center align-middle text-[40px]' >
                <span className=' opacity-50 text-[18px]'>
                    Login with :
                </span>
                <button className='text-blue-600' onClick={() => router.push(url.DASHBOARD)} >
                    <FaFacebookSquare />
                </button>
                <button onClick={() => router.push(url.DASHBOARD)} >
                    <FcGoogle />
                </button>
            </div>
        </div>
    )
}

export default Header