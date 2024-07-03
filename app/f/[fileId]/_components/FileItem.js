import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";

function FileItem({file}) {
    const [password, setPassword] = React.useState('')
  return file&&(
    <div>
      <div className="p-5 rounded-md bg-white flex flex-col items-center">
        <div className="text-center flex-col gap-3 items-center flex">
          <h2 className="text-[20px] text-gray-600">
            <strong className="text-primary">{file.userName} </strong>
             shared file with you!
          </h2>
          <h2 className='text-[10px] text-gray-400'>
            Find File Details Below
          </h2>
          <Image src='/download-file.gif'
            width={150}
            height={150}
            className="w-[150px] h-[150px] p-5 object-contain"
          />
          <h2 className="text-gray-500 text-[15px]">{file.fileName} ⚡ {file.fileType} ⚡ {file.fileSize} Bytes</h2>
        </div>

        {file.password.length>3?<input type="password" className="p-2 border rounded-md text-[14px] mt-5 text-center outline-blue-400" placeholder="Enter a password to access" onChange={(e)=>setPassword(e.target.value)}/>:null}
        <button href='' className="flex mt-5 gap-2 p-2 bg-primary text-white rounded-full w-full items-center hover:bg-blue-600 text-[14px] justify-center disabled:bg-gray-300" disabled={file.password !== password} onClick={()=>window.open(file.fileUrl)}>
            <Download className="h-4 w-4"/>
            Download
        </button>
      </div>
    </div>
  );
}

export default FileItem;
