import React, { useMemo } from 'react'

type Props = {
  tagname?: string;
  discription?: string;
}

const Card = (props: Props) => {
  const { discription, tagname } = props

  const renderComponent = useMemo(() => {
    if (!tagname) {
      return (<div className=''>
        <div className='text-xl font-bold'>
          Card
        </div>
        {!discription && (
          <div className=''>
            discription
          </div>
        )}
      </div>)
    }
  }, [discription, tagname])
  return (
    <>
      {renderComponent}
    </>
  )
}

export default Card