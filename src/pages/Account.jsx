import React from "react";
import { UserAuth } from "../AuthContext";

const Account = () =>{

    const { logOut, user } = UserAuth

    const handleSignOut = async () =>{
        try{
            await logOut();
    
        }catch(error){
            console.log(error)
        }
    }
    return(
        <div>
            <p> Account</p>
            <div>
                <p>Welcome, {user?.displayName} </p>
            </div>
            <button onClick={handleSignOut()}>LogOut</button>

        </div>
    );
};

export default Account;