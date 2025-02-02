"use client"
import React, { useEffect } from 'react'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import { app } from '../../../firebaseConfig'
import FileItem from './_components/FileItem'
import Link from 'next/link'
import Image from 'next/image'


const FileView = ({params}) => {
    useEffect(()=>{
        params?.fileId&&getFileInfo()
    },[])
    const db = getFirestore(app);
    const [file, setFile] = React.useState(null)
    const getFileInfo = async () => {
        const docRef = doc(db, "uploadedFile", params?.fileId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setFile(docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

  return (
    <div className='bg-gray-100 h-screen w-full flex justify-center items-center flex-col gap-4'>
    <Link href='/'>
        <Image src='/logo.svg' width={150} height={150}/>
    </Link>
    <FileItem file={file}/>
    </div>
  )
}

export default FileView