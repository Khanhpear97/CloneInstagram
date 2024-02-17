import React, {useState} from "react";
import {Button, Modal, ModalBody, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {FaPhotoVideo} from "react-icons/fa";
import './CreatePostModal.css'
import {GrEmoji} from "react-icons/gr";
import {GoLocation} from "react-icons/go";

export const CreatePostModal = ({onClose, isOpen}) => {
    const [isDragOver, setIsDragOver] = useState(false)
    const [file, setFile] = useState()
    const [caption, setCaption] = useState("")

    const handleDrop = (event) => {
        event.preventDefault()
        const droppedFile = event.dataTransfer.file[0]
        if (droppedFile.type.startsWith('image/') || droppedFile.type.startsWith('video/')) {
            setFile(droppedFile)
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
        setIsDragOver(true)
    }

    const handleDragLeave = () => {
        setIsDragOver(false)
    }

    const handleOnChange = (e) => {
        const file = e.target.files[0]
        if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {
            setFile(file)
        } else {
            setFile(null)
            alert('Please sellect an image or video')
        }
    }

    const handleCaptionChange = (e) => {
        setCaption(e.target.value)
    }

    return (
        <div>
            <Modal size={'4xl'} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay/>
                <ModalContent>
                    <div className='flex justify-between py-1 px-10 items-center'>
                        <p>Create New Post</p>
                        <Button variant={'ghost'} size={'sm'} colorScheme={'blue'}>
                            Share
                        </Button>
                    </div>
                    <hr/>
                    <ModalBody>
                        <div className='flex h-[70vh] justify-between pb-5'>
                            <div className='w-[50%]'>
                                {!file && <div onDrop={handleDrop} onDragOver={handleDragOver}
                                      onDragLeave={handleDragLeave} className='drag-drop h-full'>
                                    <div>
                                        <FaPhotoVideo className='text-3xl'/>
                                        <p>Drag photos and videos here</p>
                                    </div>
                                    <label htmlFor="file-upload" className='custom-file-upload'>Select from
                                        computer</label>
                                    <input className='file-Input' type="file" id='file-upload' accept='image/*, video/*'
                                           onChange={handleOnChange}/>
                                </div>}

                                {file && <img className='max-h-full' src={URL.createObjectURL(file)} alt=""/>}

                            </div>

                            <div className='w-[1px] h-full'></div>

                            <div className='w-[50%]'>
                                <div className='flex items-center px-2'>
                                    <img className='w-7 h-7 rounded-full' src="https://cdn.pixabay.com/photo/2020/09/04/08/02/cat-5543222_1280.jpg" alt=""/>
                                    <p className='font-semibold ml-4'>username</p>
                                </div>
                                <div className='px-2'>
                                    <textarea className='captionInput' placeholder='Write a caption' name='caption'
                                              rows="8" onChange={handleCaptionChange}></textarea>
                                </div>

                                <div className='flex justify-between px-2'>
                                    <GrEmoji/>
                                    <p className='opacity-70'>{caption?.length} /2,200</p>
                                </div>
                                <hr/>

                                <div className='flex p-2 justify-between items-center'>
                                    <input className='locationInput' type="text" placeholder='Add location' name='location'/>
                                    <GoLocation/>
                                </div>
                                <hr/>

                            </div>

                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}