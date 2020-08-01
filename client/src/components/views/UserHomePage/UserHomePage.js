import { FaCode } from "react-icons/fa";
import React, { useState,useEffect, Suspense } from 'react';
import NavBar from "../../views/NavBar/NavBar";
import Axios from "axios";


function UserHomePage(){
    
    const[Rounds, setRounds] = useState([])
    useEffect(() => {
        
        Axios.post('api/round/getRounds')
            .then(response=> {
                if(response.data.success){
                    setRounds(response.data.rounds)

                    console.log(response.data.rounds)
                }else {
                    alert('Failed to get rounds')
                }
            })
        
    }, [])
    
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