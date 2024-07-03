import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import GlobalApi from '../../../../../_utils/GlobalApi';

function FileShareForm({ file, onPasswordSave }) {
    const [isPasswordEnabled, setIsPasswordEnabled] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const sendEmail = () => {
        const data = {
            emailToSend: email,
            userName:user?.fullName,
            fileName:file?.fileName,
            fileSize: file?.fileSize,
            fileType:file?.fileType,
            shortUrl:file?.shortUrl,
        };
        GlobalApi.sendEmail(data).then(res => {
            console.log(res);
        }).catch(err => {
            console.error(err);
        });
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(file.shortUrl);
        // You might want to add a toast notification here
    };

    return file && (
        <div className='flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm'>
            <div>
                <label className='text-sm text-gray-500 mb-1 block'>Short Url</label>
                <div className='flex gap-2 p-2 border rounded-md justify-between items-center bg-gray-50'>
                    <input 
                        type='text' 
                        value={file.shortUrl} 
                        readOnly 
                        className='text-gray-700 bg-transparent outline-none w-full'
                    />
                    <button onClick={handleCopy} className='text-gray-400 hover:text-gray-700'>
                        <Copy size={20} />
                    </button>
                </div>
            </div>
            
            <div className='flex items-center gap-2'>
                <input 
                    type='checkbox' 
                    id='enablePassword'
                    checked={isPasswordEnabled}
                    onChange={(e) => setIsPasswordEnabled(e.target.checked)}
                    className='w-4 h-4'
                />
                <label htmlFor='enablePassword' className='text-sm font-semibold text-gray-700'>Enable Password?</label>
            </div>

            {isPasswordEnabled && (
                <div className='flex gap-2 items-center'>
                    <input 
                        type='password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter password'
                        className='flex-grow p-2 border rounded-md outline-none'
                    />
                    <button 
                        className='px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300 hover:bg-blue-600 transition-colors'
                        disabled={password.length < 3}
                        onClick={() => onPasswordSave(password)}
                    >
                        Save
                    </button>
                </div>
            )}

            <div className='mt-6'>
                <h3 className='text-sm font-semibold text-gray-700 mb-2'>Send File to Email</h3>
                <input 
                    type='email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='example@gmail.com'
                    className='w-full p-2 border rounded-md outline-none mb-2'
                />
                <button 
                    className='w-full p-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300 hover:bg-blue-600 transition-colors'
                    disabled={!email.includes('@')}
                    onClick={sendEmail}
                >
                    Send Email
                </button>
            </div>
        </div>
    );
}

export default FileShareForm;