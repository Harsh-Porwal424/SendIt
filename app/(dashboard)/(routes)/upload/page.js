"use client"
import React from 'react'
import UploadFormData from './_components/UploadFormData'

const Upload = () => {
  return (
    <div className='p-5 px-8 md:px-28'>
    <h2 className='text-[20px] text-center m-5'>
    Start <strong className='text-primary'>Uploading</strong> Files & <strong className='text-primary'>share </strong>it
    </h2>
    <UploadFormData/>
    </div>
  )
}

export default Upload