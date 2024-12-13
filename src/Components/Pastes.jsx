import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveFromPaste } from '../Features/MindBoardSlice';

const Pastes = () => {
    const pastes = useSelector((state) => state.MindBoarding.pastes);
    const [search, SetSearch] = useState('');
    const dispatch = useDispatch();

    const FilterData = pastes.filter((arr) => arr.title.toLowerCase().includes(search.toLowerCase()))

    function onEdit(){
        dispatch()
    }
    function onView(){

    }
    function onDelete(pasteID){
        dispatch(RemoveFromPaste(pasteID))
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
                    FilterData.map(
                        (arr) => {
                            return (
                                <div className='flex flex-row place-content-around p-2 m-1 border rounded-2xl'>
                                    <div>
                                        <div>
                                            {arr.title}
                                        </div>
                                        <div>
                                            {arr.content}
                                        </div>
                                    </div>
                                    <div className='gap-2 place-content-evenly'>
                                        <div >
                                        <button className='rounded-2xl' onClick={onEdit}>edit</button>
                                        <button className='rounded-2xl ' onClick={onView}>view</button>
                                        <button className='rounded-2xl ' onClick={()=>{onDelete(arr?._id)}}>delete</button>
                                        <button className='rounded-2xl '>copy</button>
                                        <button className='rounded-2xl '>share</button>
                                        </div>
                                        <div>
                                            {arr.createdAt}
                                            </div>
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