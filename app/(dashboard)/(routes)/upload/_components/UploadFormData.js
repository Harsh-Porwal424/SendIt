import React, { useState, useEffect } from "react";
import AlertMessage from "./AlertMessage";
import FilePreview from "./FilePreview"
import ProgressBarr from './ProgressBarr'
import SendAlert from './SendAlert'
import OverlayAlert from './OverlayAlert'



const UploadFormData = ({uploadButtonClick, progress}) => {

    const [file, setFile] = React.useState(null);

    const [erroMessage, setErrorMessage] = React.useState(null);
    const [showAlert, setShowAlert] = React.useState(false);
    useEffect(() => {
        if (progress === 100) {
            setShowAlert(true);
            // Optionally, auto-hide the alert after a certain time
            const timer = setTimeout(() => setShowAlert(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [progress]);

    const onFileSelect=(file)=>{
        console.log(file)
        if(file && file.size > 2000000){
            console.log("File is too large");
            setErrorMessage("File is too large, Maximum File Upload Size is 2MB");
            return;
        }
        setErrorMessage(null);
        setFile(file);
    }

    const handleDismissAlert = () => {
        setShowAlert(false);
    }

  return (
    <div className=" text-center">
      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 dark:hover:bg-blue-800 dark:bg-blue-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-blue-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              class="w-12 h-12 mb-4 text-blue-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-lg md:text-2xl text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or 
              <strong className="text-primary"> drag</strong> and
              <strong className="text-primary">drop</strong>
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX Size 2MB)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={(event)=>onFileSelect(event.target.files[0])} />
        </label>
      </div>
      {erroMessage?<AlertMessage msg={erroMessage}/>:null}
      {file ? <FilePreview file={file} removeFile={()=>setFile(null)}/>: null}
      
      {progress>0 ? <ProgressBarr progress={progress}/> : <button disabled={!file} className="p-2 bg-primary text-white w-[30%] rounded-full mt-5 disabled:bg-gray-400" onClick={()=>uploadButtonClick(file)}>
        Upload
      </button>}
      {showAlert && <OverlayAlert onDismiss={handleDismissAlert} />}
      </div>
  );
};

export default UploadFormData;
