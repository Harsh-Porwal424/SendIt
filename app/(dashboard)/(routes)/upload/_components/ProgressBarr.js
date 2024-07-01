import React from 'react'

const ProgressBarr = ({progress=90}) => {
  return (
    <div className='bg-gray-400 w-full h-2 mt-3 rounded-full'>
    <div className='p-1 bg-primary rounded-full' style={{width: `${progress}%`}}>
    </div>
    {`${Number(progress).toFixed(0)}%`}
    </div>
  )
}

export default ProgressBarr