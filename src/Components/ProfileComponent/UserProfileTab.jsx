import React, {useState} from "react";
import {tab} from "./TabConfig";
import {UserPostTab} from "./UserPostTab";

export const UserProfileTab = () => {
    const [activeTab, setActiveTab] = useState([]);


    return (
        <div>
            <div className='flex justify-center space-x-14 border-t relative'>
                {tab.map((item) => <div onClick={() => setActiveTab(item.title)}
                                        className= {`${activeTab === item.title ? "border-t border-black" : "opacity-60"} 
                                        flex items-center cursor-pointer py-2 text-base`}>
                    <p>{item.icon}</p>
                    <p className= 'ml-1 text-base font-bold'>{item.title}</p>
                </div>
                )}
            </div>
            <div>
                <div className='flex flex-wrap'>
                    {[1,1,1,1,1,1].map((item) => <UserPostTab/>)}
                </div>
            </div>
        </div>
    )
}