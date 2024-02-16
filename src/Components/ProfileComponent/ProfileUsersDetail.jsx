import React from "react";
import {TbCircleDashed} from "react-icons/tb";

export const ProfileUsersDetail = () => {
    return (
        <div className='py-10 w-full'>
            <div className='flex items-center'>
                <div className='w-[15%]'>
                    <img className='w-32 h-32 rounded-full' src="https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg" alt=""/>
                </div>

                <div className='space-y-5'>
                    <div className='flex space-x-10 items-center'>
                        <p>username</p>
                        <button>Edit Profile</button>
                        <TbCircleDashed/>
                    </div>

                    <div className='flex space-x-10'>
                        <div>
                            <span className='font-semibold mr-1'>10</span>
                            <span>bài viết</span>
                        </div>
                        <div>
                            <span className='font-semibold mr-1'>5</span>
                            <span>người theo dõi</span>
                        </div>
                        <div>
                            <span className='mr-1'>Đang theo dõi</span>
                            <span className='font-semibold mr-1'>7</span>
                            <span>người dùng</span>
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