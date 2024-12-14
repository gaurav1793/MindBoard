import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveFromPaste } from '../Features/MindBoardSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';



const Pastes = () => {
    const pastes = useSelector((state) => state.MindBoarding.pastes);
    const [search, SetSearch] = useState('');
    const dispatch = useDispatch();

    const FilterData = pastes.filter((arr) => arr.title.toLowerCase().includes(search.toLowerCase()))

    function onEdit() {

    }
    function handleView() {
        
    }
    function handleShare() {
        const url = window.location.href;
        toast.success("Paste shared")
    }
    function handleCopy(content) {
        navigator.clipboard.writeText(content)
        toast.success("Copied to Clipboard")
    }
    function handleDelete(pasteId) {
        dispatch(RemoveFromPaste(pasteId))
    }

    return (
        <div>
            <input
                className='p-2 bg-black text-white rounded-2xl mt-4 min-w-[700px]'
                placeholder='search'
                value={search}
                onChange={(e) => SetSearch(e.target.value)}
            />
            <div className='flex flex-col text-black mt-4 gap-2'>
                {
                    FilterData.length > 0 &&
                    FilterData.map(
                        (arr) => {
                            return (
                                <div key={arr._id} className=' p-2 m-1 border rounded-2xl gap-2'>
                                    <div>
                                        {arr.title}
                                    </div>
                                    <div>
                                        {arr.content}
                                    </div>

                                    <div className=' flex felx-row gap-3 border place-content-around'>

                                        <button className='rounded-2xl' ><Link to={`/?pasteID=${arr?._id}`}>edit</Link></button>
                                        <button className='rounded-2xl '><Link to={`/paste/${arr?._id}`}>view</Link></button>
                                        <button className='rounded-2xl ' onClick={() => handleDelete(arr?._id)}>delete</button>
                                        <button className='rounded-2xl ' onClick={() => handleCopy(arr?.content)}>copy</button>
                                        <button className='rounded-2xl ' onClick={handleShare}>share</button>
                                    </div>
                                    <div>
                                        {arr.createdAt}
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Pastes