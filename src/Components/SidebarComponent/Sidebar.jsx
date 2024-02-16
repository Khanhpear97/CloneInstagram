import React, {useState} from "react";
import { IoReorderThree } from "react-icons/io5";
import {menu} from "./SidebarConfig";
import {useNavigate} from "react-router-dom";

export const Sidebar = () => {
    const [activeTab, setActiveTab] = useState()
    const navigate = useNavigate()
    const HandleTabClick = (title) => {
        setActiveTab(title)
        if (title === "Profile") {
            navigate("/username");
        } else if (title === "Home") {
            navigate("/");
        }
    }

    return (
        <div className='sticky top-0 h-[100vh]'>
            <div className='flex flex-col justify-between h-full px-10'>
                <div>
                    <div className='pt-10'>
                        <img className='w-40' src="https://clipart.info/images/ccovers/1522452762Instagram-logo-png-text.png" alt=""/>
                    </div>
                    <div className='mt-10'>
                        {menu.map((item) =>
                            <div onClick={() => HandleTabClick(item.title)} className='flex items-center mb-5 cursor-pointer text-lg'>
                                {activeTab === item.title ? item.activeIcon : item.icon}
                                <p className={`${activeTab === item.title ? "font-bold" : "font-semibold"}`}>{item.title}</p>
                            </div>)}
                    </div>

                </div>
                <div className='flex items-center cursor-pointer pb-10'>
                    <IoReorderThree className='text-2xl'/>
                    <p className='ml-5'>More</p>
                </div>
            </div>
        </div>
    )
}
