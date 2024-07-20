"use client"
import React, { useEffect } from "react";
import UploadFormData from "./_components/UploadFormData";
import { app } from "../../../../firebaseConfig";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import ProgressBarr from './_components/ProgressBarr'
import { useUser } from "@clerk/nextjs";
import { GenerateRandomString } from '../../../_utils/GenerateRandomString'
import { useRouter } from "next/navigation";

const Upload = () => {
  const {user} = useUser();
  const [progress, setProgress] = React.useState(0);
  const router = useRouter();
  const [fileDocId, setFileDocId] = React.useState(null);
  const [uploadCompleted, setUploadCompleted]=React.useState(false);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };
    const storageRef = ref(storage, "file-upload/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on("state_changed", (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      setProgress(progress);
      progress==100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        saveInfo(file, downloadURL);
      });
    });
  };

  const saveInfo=async(file, fielUrl)=>{
    const docID = GenerateRandomString().toString()
    await setDoc(doc(db, "uploadedFile", docID), {
      fileName:file?.name,
      fileSize: file?.size,
      fileType:file?.type,
      fileUrl:fielUrl,
      userEmail:user?.primaryEmailAddress.emailAddress,
      userName:user?.fullName,
      password:'',
      id: docID,
      shortUrl:process.env.NEXT_PUBLIC_BASE_URL+'f/'+docID,
    });
    setFileDocId(docID);
  }

  useEffect(() => {
    console.log("Trigger")
    progress==100 && setTimeout(() => {
      setUploadCompleted(true);
    }, 2000)
  }, [progress==100])

  useEffect(() => {
   uploadCompleted&&
   setTimeout(()=>{
    setUploadCompleted(false);
    //window.location.reload();
    router.push('file-preview/'+fileDocId);
   },2000)
  }, [uploadCompleted==true])

  return (
    <div className="p-5 px-8 md:px-28">
      <h2 className="text-[20px] text-center m-5">
        Start <strong className="text-primary">Uploading</strong> Files &{" "}
        <strong className="text-primary">share </strong>it
      </h2>
      <UploadFormData uploadButtonClick={(file) => uploadFile(file)} progress={progress} fileDocId={fileDocId} />
    </div>
  );
};

export default Upload;
