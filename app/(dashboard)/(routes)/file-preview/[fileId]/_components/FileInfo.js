import React, { useEffect } from 'react'
import Image from 'next/image'

function FileInfo ({file}){
  const [fileType, setFileType] = React.useState(null)

  useEffect(() => {
    file&&setFileType(file.fileType.split('/')[0]);
    console.log(fileType);
  }, [file])

  return file&&(
    <div className='text-center border flex justify-center m-4 flex-col items-center p-2 rounded-md border-'>
        <Image src={fileType=='image'?file?.fileUrl:'/file.png'} width={200} height={200} className='h-[200px] rounded-md object-contain'/>
        <div className=''>
            <h2>{file.fileName}</h2>
            <h2 className='text-gray-400 text-[13px]'>{file.FileInfo}</h2>
        </div>
    </div>
  )

}

export default FileInfo