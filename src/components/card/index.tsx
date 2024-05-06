"use client"

import { DescriptionProps } from '@/interfaces';
import React, { useMemo, useState } from 'react'
import { BiCaretDownCircle, BiCaretUpCircle } from 'react-icons/bi';

type Props = {
  tagname?: string;
  description?: DescriptionProps;
}

const Card = (props: Props) => {
  const { description, tagname } = props

  const [showDescription, setShowDescription] = useState(true)

  const renderComponent = useMemo(() => {
    if (!tagname) {
      return (
        <div className='flex flex-col justify-center bg-green-50 p-1 rounded-md shadow-xl'>
          <div className='relative flex flex-row text-xl text-center font-bold bg-green-200 justify-between px-2 gap-6'>
            <div className=''>
              {tagname ?? "Component:Tagname"}
            </div>
            {description && <button onClick={() => setShowDescription(prev => !prev)} className='hover:text-blue-700'>
              {
                showDescription ?
                  <BiCaretUpCircle /> :
                  <BiCaretDownCircle />
              }
            </button>}
          </div>
          {description && showDescription && (
            <div className='flex flex-col gap-2 max-w-64 p-2'>
              <div className='font-medium'>
                {description.text}
              </div>

              {description.attribute?.map((attribute, index) => (
                <div key={index} className=' flex flex-col'>
                  <div className='font-medium'> <li>{attribute.name}</li>  </div>
                  <div className='pl-8'>{attribute.content ?? "no content"}</div>
                </div>
              ))}

              <div className=' flex flex-col'>
                <div className='font-medium'> <li>Description</li>  </div>
                <div className='pl-8'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
              </div>

              <div className=' flex flex-col'>
                <div className='font-medium'> <li>Description</li>  </div>
                <div className='pl-8'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>

            </div>
          )}
        </div>)
    }
  }, [description, showDescription, tagname])
  return (
    <>
      {renderComponent}
    </>
  )
}

export default Card