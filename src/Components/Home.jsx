import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { AddToPaste, UpdateToPaste } from '../Features/MindBoardSlice';




const Home = () => {
    const [title,SetTitle]=useState("");
    const [value,SetValue]=useState("");
    const [searchparams,setparams]=useSearchParams();
    const dispatch = useDispatch();

    const pasteID=searchparams.get("pasteID");
    const allPaste = useSelector((state)=>state.MindBoarding.pastes)

    useEffect(()=>{
        if(pasteID){
            const paste = allPaste.find((arr)=>arr._id===pasteID);
            SetTitle(paste.title)
            SetValue(paste.content)
        }
    },[pasteID])

    function CreatePaste(){
        const paste={
            title:title,
            content:value,
            _id: pasteID|| Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }

        if(pasteID){
            //UPDATE
            dispatch(UpdateToPaste(paste))
        }
        else{
            //create
            dispatch(AddToPaste(paste))
        }

        //clearing after clicking the button 
        SetValue(''),
        SetTitle(''),
        setparams({})
    }
  return (
    <div>
        <div className='flex flex-row gap-3 place-content-between'>
        <input
            className='p-2 rounded-xl bg-black mt-2 text-white w-[70%]'
            type='text'
            placeholder='enter title here'
            value={title}
            onChange={(e)=>SetTitle(e.target.value)}
        />
        <button  className='p-2 rounded-xl mt-2'
                onClick={CreatePaste}
        >
            {
                pasteID ? "Upate Paste" : "Create My Paste"
            }
        </button>
        </div>
        <div>
        <textarea
        className='bg-black  text-white h-7 mt-8 rounded-2xl min-h-[600px] min-w-[600px] p-2'
        placeholder='entetr text here'
        value={value}
        onChange={(e)=>SetValue(e.target.value)}
        rows={60}
        />
        </div>
    </div>
  )
}

export default Home