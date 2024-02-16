import React from "react";
import {TbCircleDashed} from "react-icons/tb";

export const ProfileUsersDetail = () => {
    return (
        <div className='py-10 w-full'>
            <div className='flex px-20 items-center'>
                <div className='w-[15%]'>
                    <img className='w-32 h-32 rounded-full' src="https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg" alt=""/>
                </div>

                <div className='space-y-5 px-20'>
                    <div className='flex space-x-10 items-center'>
                        <p>username</p>
                        <button>Edit Profile</button>
                        <TbCircleDashed/>
                    </div>

                    <div className='flex space-x-10'>
                        <div>
                            <span className='font-semibold mr-1'>10</span>
                            <span>post</span>
                        </div>
                        <div>
                            <span className='font-semibold mr-1'>5</span>
                            <span>follower</span>
                        </div>
                        <div>
                            <span className='font-semibold mr-1'>7</span>
                            <span>following</span>
                        </div>
                    </div>

                    <div>
                        <p className='font-semibold'>Nick name</p>
                        <p className='font-thin text-sm'>Decribe of user</p>
                    </div>
                </div>
            </div>
        </div>
    )
}