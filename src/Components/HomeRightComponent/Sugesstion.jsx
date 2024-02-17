import React from "react";

export const Sugesstion = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center'>
                <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2020/09/04/08/02/cat-5543222_1280.jpg" alt=""/>
                <div className='ml-2'>
                    <p className='text-sm font-semibold'>username</p>
                    <p className='text-sm font-semibold opacity-70'>Follows you</p>
                </div>
            </div>
            <p className='text-blue-700 text-sm font-semibold'>Follow</p>
        </div>
    )
}