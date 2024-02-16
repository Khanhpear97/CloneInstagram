import React from "react";
import {Route, Routes} from "react-router-dom";
import {Sidebar} from "../../Components/SidebarComponent/Sidebar";
import {HomePage} from "../HomePage/HomePage";
import {Profile} from "../Profile/Profile";


export const Router = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-[20%] border border-1-slate-500'>
                    <Sidebar/>
                </div>
                <div>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/username' element={<Profile/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}