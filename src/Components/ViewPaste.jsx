import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewPaste = () => {
  const [title, SetTitle] = useState("");
  const [value, SetValue] = useState("");
  const {id}=useParams();
  
  const allPaste = useSelector((state) => state.MindBoarding.pastes)
  useEffect(() => {
    if (id) {
      const paste = allPaste.find((arr) => arr._id === id);
      SetTitle(paste.title)
      SetValue(paste.content)
    }
  }, [id])
  return (
    <div>
      <div className='flex flex-row gap-3 place-content-between'>
        <input
          className='p-2 rounded-xl bg-black mt-2 text-white w-[70%]'
          type='text'
          placeholder='enter title here'
          value={title}
          onChange={(e) => SetTitle(e.target.value)}
          disabled
        />
        <button className='p-2 rounded-xl mt-2'
          // onClick={CreatePaste}
          disabled
        >
          {
            id ? "View Paste" : "Create My Paste"
          }
        </button>
      </div>
      <div>
        <textarea
          className='bg-black  text-white h-7 mt-8 rounded-2xl min-h-[350px] min-w-[500px] p-2'
          placeholder='entetr text here'
          value={value}
          onChange={(e) => SetValue(e.target.value)}
          rows={60}
          disabled
        />
      </div>
    </div>
  )
}

export default ViewPaste