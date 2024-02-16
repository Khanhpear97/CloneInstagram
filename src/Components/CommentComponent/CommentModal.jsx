import React from 'react';
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay
} from "@chakra-ui/react";
import {BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots} from "react-icons/bs";
import {Comment} from "./Comment";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";
import {RiSendPlaneLine} from "react-icons/ri";
import './CommentModal.css'

export const CommentModal = ({onClose, isOpen, isPostLiked, isSaved, handlePostLiked, handleSavePost}) => {
    return (
        <div>
            <Modal size={'4xl'} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay/>
                <ModalContent>

                    <ModalBody>
                        <div className='flex h-[75vh]'>
                            <div className='w-[45%] flex flex-col justify-center'>
                                <img className='max-h-full w-full'
                                     src="https://cdn.pixabay.com/photo/2012/10/12/17/12/cat-61079_1280.jpg" alt=""/>
                            </div>
                            <div className='w-[55%] pl-10 relative'>
                                <div className='flex justify-between items-center py-5'>
                                    <div className='flex items-center'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full'
                                                 src="https://cdn.pixabay.com/photo/2016/11/23/14/57/cat-1853372_1280.jpg"
                                                 alt=""/>
                                        </div>
                                        <div className='ml-2'>
                                            <p>username</p>
                                        </div>
                                    </div>
                                    <BsThreeDots/>
                                </div>
                                <hr/>
                                <div className='comment'>
                                    {[1, 1, 1, 1, 1].map(() => <Comment/>)}
                                </div>

                                <div className='absolute bottom-0 w-[90%]'>
                                    <div className='flex justify-between items-center w-full py-4'>
                                        <div className='flex items-center space-x-2'>
                                            {isPostLiked ? <AiFillHeart
                                                    className='text-2xl hover:opacity-50 cursor-pointer text-red-600'
                                                    onClick={handlePostLiked}/>
                                                : <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer'
                                                                  onClick={handlePostLiked}/>}
                                            <FaRegComment className='text-xl hover:opacity-50 cursor-pointer'/>
                                            <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
                                        </div>
                                        <div className='cursor-pointer'>
                                            {isSaved ?
                                                <BsBookmarkFill className='text-xl hover:opacity-50 cursor-pointer'
                                                                onClick={handleSavePost}/>
                                                : <BsBookmark className='text-xl hover:opacity-50 cursor-pointer'
                                                              onClick={handleSavePost}/>}
                                        </div>
                                    </div>

                                    <div className='w-full py-2'>
                                        <p>10 likes</p>
                                        <p className='opacity-50 text-sm'>1 day ago</p>
                                    </div>

                                    <div className='flex w-full items-center'>
                                        <BsEmojiSmile/>
                                        <input className='commentInput' type="text" placeholder='Add a comment...'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </div>
    )
}