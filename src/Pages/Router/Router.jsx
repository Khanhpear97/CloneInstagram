import React from "react";
import {Route, Routes} from "react-router-dom";
import {Sidebar} from "../../Components/SidebarComponent/Sidebar";
import {HomePage} from "../HomePage/HomePage";
import {Profile} from "../Profile/Profile";
import {Story} from "../../Components/StoryComponent/Story";


export const Router = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-[20%] border border-1-slate-500'>
                    <Sidebar/>
                </div>
                <div className='w-full'>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/username' element={<Profile/>}/>
                        <Route path='/story' element={<Story/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}