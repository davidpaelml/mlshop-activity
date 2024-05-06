import React from 'react'
import Image from 'next/image'
import { Logo } from '@/components'

const Footer = () => {
    return (
        <div className={`flex flex-row justify-between text-white h-fit w-full p-4 px-10
        ${"bg-[#4f1414]"}`}>
            <div className=' flex max-w-96 text- gap-2'>
                <div className='float-left'>
                    <Image src={'/header/logo.png'} alt='logo' height={70} width={70} />
                    <p className='max-w-52'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla nobis numquam est aliquid magni! Consequatur sit minima autem quos placeat in assumenda rem, harum, amet, animi aliquid laudantium totam!
                    </p>
                </div>


            </div>
            <div className='border border-white'>

            </div>
            <div className='border border-white'>

            </div>
            <div className='border border-white'>

            </div>

        </div>
    )
}

export default Footer