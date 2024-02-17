import React from "react";

export const SearchUser = () => {
    return (
        <div className='py-2 cursor-pointer'>
            <div className='flex items-center'>
                <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2018/09/01/09/06/cat-3646358_1280.jpg" alt=""/>
                <div className='ml-3'>
                    <p>username</p>
                    <p className='opacity-70'>nickname</p>
                </div>
            </div>
        </div>
    )
}