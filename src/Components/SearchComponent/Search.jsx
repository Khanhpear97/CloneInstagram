import React from "react";
import './Search.css'
import {SearchUser} from "./SearchUser";

export const Search = () => {
    return (
        <div className='search-container'>
            <div className='px-3 pb-5'>
                <h1 className='text-xl pb-5'>Search</h1>
                <input className='searchInput' type="text" placeholder='Search...'/>
            </div>

            <hr/>

            <div className='px-3 pt-5'>
                {[1,1,1,1].map((item) => <SearchUser/>)}
            </div>
        </div>
    )
}