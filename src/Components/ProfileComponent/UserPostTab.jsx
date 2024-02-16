import React from "react";
import {AiFillHeart} from "react-icons/ai";
import {FaComment} from "react-icons/fa";
import "./UserPostTab.css"

export const UserPostTab = () => {
    return (
        <div className='p-0.5'>
            <div className='post w-60 h-60'>
                <img className='cursor-pointer' src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_1280.jpg" alt=""/>
                <div className='overlay'>
                    <div className='overlay-text flex justify-between'>
                        <div>
                            <AiFillHeart/>
                            <span>10</span>
                        </div>
                        <div>
                            <FaComment/>
                            <span>5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}