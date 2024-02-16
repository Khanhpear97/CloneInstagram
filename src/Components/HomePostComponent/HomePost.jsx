import React, {useState} from "react";
import {BsBookFill, BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots} from "react-icons/bs";
import "./HomePost.css"
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";
import {RiSendPlaneLine} from "react-icons/ri";
import {CommentModal} from "../CommentComponent/CommentModal";
import {useDisclosure} from "@chakra-ui/react";

export const HomePost = () => {
    const [dropDown, setDropDown] = useState(false)
    const [isPostLiked, setIsPostLiked] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = () => {
        setDropDown(!dropDown);
    }

    const handlePostLiked = () => {
        setIsPostLiked(!isPostLiked);
    }

    const handleSavePost = () => {
        setIsSaved(!isSaved);
    }

    const handleOpenCommentModal = () => {
        onOpen();
    }

    return (
        <div>
            <div className='border rounded-md w-full'>
                <div className='flex justify-between items-center w-full py-4 px-5'>
                    <div className='flex items-center'>
                        <img className='w-12 h-12 rounded-full' src="https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg" alt=""/>
                        <div className='pl-2'>
                            <p className='font-semibold text-sm '>username</p>
                            <p className='font-thin text-sm'>location</p>
                        </div>
                    </div>

                    <div className='dropdown'>
                        <BsThreeDots className='dots' onClick={handleClick}/>
                        <div className='dropdown-content'>
                            {dropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <img className='w-full' src="https://cdn.pixabay.com/photo/2012/10/12/17/12/cat-61079_1280.jpg" alt=""/>
                </div>

                <div className='flex justify-between items-center w-full px-5 py-4'>
                    <div className='flex items-center space-x-2'>
                        {isPostLiked ? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-600' onClick={handlePostLiked}/>
                            : <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLiked}/>}
                        <FaRegComment onClick={handleOpenCommentModal} className='text-xl hover:opacity-50 cursor-pointer'/>
                        <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
                    </div>
                    <div className='cursor-pointer'>
                        {isSaved ? <BsBookmarkFill className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSavePost}/>
                            : <BsBookmark className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSavePost}/>}
                    </div>
                </div>

                <div className='w-full py-2 px-5'>
                    <p>10 likes</p>
                    <p className='opacity-50 py-2 cursor-pointer'>View all 20 comments</p>
                </div>

                <div className='border border-t '>
                    <div className='flex w-full items-center px-5'>
                        <BsEmojiSmile/>
                        <input className='commentInput' type="text" placeholder='Add a comment...'/>
                    </div>
                </div>
            </div>

            <CommentModal handlePostLiked={handlePostLiked} isOpen={isOpen}
                          onClose={onClose} handleSavePost={handleSavePost}
                          isPostLiked={isPostLiked} isSaved={isSaved}/>
        </div>
    )
}