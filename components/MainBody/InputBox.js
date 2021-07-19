import { useSession } from 'next-auth/client'
import Image from 'next/image'

import {
    CameraIcon,VideoCameraIcon
} from "@heroicons/react/solid";
import {EmojiHappyIcon } from "@heroicons/react/outline";
import { useRef, useState } from 'react';
import { db, storage } from '../../firebase';
import firebase from 'firebase'

function InputBox() {
    
    const [session]=useSession();
    const inputRef=useRef(null);
    const filePickerRef=useRef(null);  // to grab files from the device
    const [imageToPost,setImageToPost]=useState(null);
    const sendPost=(e)=>{
        e.preventDefault();

        if(!inputRef.current.value) return; //if input field is empty,nothing to upload

        db.collection('posts').add({
            message:inputRef.current.value,
            name:session.user.name,
            email:session.user.email,
            image:session.user.image,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),

        }).then(doc=>{
            if(imageToPost){
                const uploadTask=storage.ref(`posts/${doc.id}`).putString(imageToPost,'data_url');

                removeImage();

                uploadTask.on('state_change',
                null,
                error=>console.error(error),
                ()=>{
                    //When the upload completes
                    storage.ref('posts').child(doc.id).getDownloadURL().then(url=>{
                        db.collection('posts').doc(doc.id).set({
                            postImage: url,
                        },{merge:true})
                    })
                })
            }

 
        })
        inputRef.current.value='';
      };

      const addImageToPost=(e)=>{
          const fileReader=new FileReader();
          if(e.target.files[0]){
             fileReader.readAsDataURL(e.target.files[0]);
          }
          fileReader.onload=(readerEvent)=>{
              setImageToPost(readerEvent.target.result);
          }
      }
      const removeImage=()=>{
          setImageToPost(null); //just to clear the image that is saved in the state
      }
    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center'>
                <Image className='rounded-full'
                    src={session.user.image}
                    width='40'
                    height='40'
                    layout='fixed'

                />
                <form className='flex flex-1'>
                    <input className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' type="text" ref={inputRef} placeholder={`What's on your mind, ${session.user.name}`}/>
                    <button hidden type='submit' onClick={sendPost}>Submit</button>
                </form>

                {imageToPost && (
                    <div onClick={removeImage} className='flex flex-col filter hover:brightness-110 transiton duration-150 transform hover:scale-105 cursor-pointer'>
                        <img className='h-10 object-contain' src={imageToPost} alt="" />
                        <p className='text-xs text-center text-red-500'>Remove</p>
                    </div>
                )}
            </div>

            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>  
                    {/* here inputIcon is a custom class */}
                    <VideoCameraIcon className='h-7 text-red-500'/>
                    <p className='text-xs sm:text-sm xl:text-base'> Live Video</p>

                </div>

                <div onClick={()=>filePickerRef.current.click()} className='inputIcon'>
                {/* {here the filePickerRef will open file section in the device} */}
                <CameraIcon className='h-7 text-green-400'/>
                    <p className='text-xs sm:text-sm xl:text-base'> Photo/Video</p>
                    <input type="file" ref={filePickerRef} onChange={addImageToPost} hidden />
                    {/* Here this hidden input will take input when clicking the icon div */}
                </div>

                <div className='inputIcon'>
                <EmojiHappyIcon className='h-7 text-yellow-300'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Feelings/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox
