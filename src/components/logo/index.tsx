import router from 'next/router'
import React from 'react'
import Image from 'next/image'

type Props = {
    hideTitle?: boolean
}

const Logo = (props: Props) => {
    const { hideTitle } = props

    return (
        <div className=' flex flex-row items-center text-center align-middle w-fit gap-3'>
            <button onClick={() => router.push('/')}>
                <Image src={'/header/logo.png'} alt='logo' height={70} width={70} />
            </button>

            {!hideTitle && <span className='font-bold text-[22px] text-red-500'> MLhuillier Bank </span>}
        </div>
    )
}

export default Logo