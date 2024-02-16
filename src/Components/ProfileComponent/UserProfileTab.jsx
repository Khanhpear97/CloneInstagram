import React, {useState} from "react";
import {tab} from "./TabConfig";

export const UserProfileTab = () => {
    const [activeTab, setActiveTab] = useState([]);


    return (
        <div>
            <div className='flex space-x-14 border-t relative'>
                {tab.map((item) => <div onClick={() => setActiveTab(item.title)}
                                        className= {`${activeTab === item.title ? "border-t border-black" : "opacity-60"} 
                                        flex items-center cursor-pointer py-2 text-sm`}>
                    <p>{item.icon}</p>
                    <p className='ml-1 text-sm'>{item.title}</p>
                </div>
                )}
            </div>
        </div>
    )
}