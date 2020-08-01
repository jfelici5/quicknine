import { FaCode } from "react-icons/fa";
import React, { Suspense } from 'react';
import NavBar from "../../views/NavBar/NavBar";


function UserHomePage(){
    return (
        <div>
            <NavBar/>
            <div className="app">
            
                <FaCode style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>Fuck this</span>
            </div>
        </div>
    )
}

export default UserHomePage