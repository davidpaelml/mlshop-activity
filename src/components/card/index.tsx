import React, { useMemo } from 'react'

type Props = {
  tagname?: string;
  description?: string;
}

const Card = (props: Props) => {
  const { description, tagname } = props

  const renderComponent = useMemo(() => {
    if (!tagname) {
      return (<div className=''>
        <div className='text-xl font-bold'>
          Card
        </div>
        {!description && (
          <div className=''>
            description
          </div>
        )}
      </div>)
    }
  }, [description, tagname])
  return (
    <>
      {renderComponent}
    </>
  )
}

export default Card