import React from "react";
import {useNavigate} from "react-router-dom";

export const StoryCircle = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/story')
    }

    return (
        <div onClick={handleNavigate} className='cursor-pointer flex flex-col items-center'>
            <img className='w-16 h-16 rounded-full' src="https://cdn.pixabay.com/photo/2020/11/22/17/28/cat-5767334_1280.jpg" alt=""/>
            <p>username</p>
        </div>
    )
}