"use client"
import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../../../../firebaseConfig'

const Page = () => {
    const db = getFirestore(app);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            const querySnapshot = await getDocs(collection(db, "uploadedFile"));
            const filesList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setFiles(filesList);
        };

        fetchFiles();
    }, []);

    const bytesToMB = (bytes) => {
        return (bytes / (1024 * 1024)).toFixed(2);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">My Files</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                File Name
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                File Size (MB)
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                File Type
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                File Preview
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map((file, index) => {
                            const fullUrl = file?.shortUrl 
                                ? `${file.shortUrl.replace(/(http:\/\/[^\/]+\/)/, '$1file-preview/')}` 
                                : '';

                            return (
                                <tr key={file.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{file.fileName}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{bytesToMB(file.fileSize)}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{file.fileType}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <a href={fullUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">view</a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Page;