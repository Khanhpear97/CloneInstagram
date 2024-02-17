import React from "react";
import {Suggestion} from "./Suggestion";

export const HomeRight = () => {
    return (
        <div className='border'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <div>
                        <img className='w-12 h-12 rounded-full'
                             src="https://cdn.pixabay.com/photo/2019/05/30/17/44/cat-4240315_1280.jpg" alt=""/>
                    </div>
                    <div className='ml-3'>
                        <p>username</p>
                        <p className='opacity-70'>nickname</p>
                    </div>
                </div>

                <div className='text-blue-700 font-semibold'>
                    <p>switch</p>
                </div>
            </div>
            <div className='space-y-5 mt-10'>
                {[1, 1, 1, 1].map((item) => <Suggestion/>)}
            </div>
        </div>
    )
}