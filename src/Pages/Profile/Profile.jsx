import React from "react";
import {ProfileUsersDetail} from "../../Components/ProfileComponent/ProfileUsersDetail";
import {UserProfileTab} from "../../Components/ProfileComponent/UserProfileTab";

export const Profile = () => {
    return (
        <div className='px-20'>
            <div>
                <ProfileUsersDetail/>
                <UserProfileTab/>
            </div>
        </div>
    )
}