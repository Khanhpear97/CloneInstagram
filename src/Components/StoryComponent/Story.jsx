import React from "react";
import {StoryView} from "./StoryView";

export const Story = () => {
    const story = [
        {
            image: 'https://cdn.pixabay.com/photo/2019/09/16/20/18/cat-4481991_1280.jpg'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2018/07/20/20/54/kitten-3551465_1280.jpg'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2021/12/05/02/41/cat-6846384_1280.jpg'
        }
    ]

    return (
        <div>
            <StoryView stories = {story}/>
        </div>
    )
}