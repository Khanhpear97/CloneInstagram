import React from "react";
import {StoryCircle} from "../../Components/StoryComponent/StoryCircle";
import {HomeRight} from "../../Components/HomeRightComponent/HomeRight";
import {HomePost} from "../../Components/HomePostComponent/HomePost"
import {CreatePostModal} from "../../Components/Post/CreatePostModal";
import {useDisclosure} from "@chakra-ui/react";

export const HomePage = () => {
    return (
        <div>
            <div className='mt-10 flex w-[100%] justify-center'>
                <div className='w-[44%] px-10'>
                    <div className='storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full'>
                        {[1,1,1,1].map((item) => <StoryCircle/>)}
                    </div>
                    <div className='space-y-10 w-full mt-10'>
                        {[1,1,1,1].map((item) => <HomePost/>)}
                    </div>
                </div>
                <div className='w-[35%]'>
                    <HomeRight/>
                </div>
            </div>

        </div>
    )
}