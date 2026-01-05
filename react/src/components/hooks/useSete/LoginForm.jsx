import { useState } from "react";
import "./index.css";



export const LoginForm = () => {

const [username,setUsername] = useState("");

const [password,setPassword] = useState("");


const handleFormSubmit = (e) =>{
    e.preventDefault();


    const loginData ={
        username,
        password,
    }

    console.log(loginData)
}

    return(
        <div className="container">
            <div className="card">
                <h1>Login Form</h1> 
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" required autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)}></input>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}></input>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}