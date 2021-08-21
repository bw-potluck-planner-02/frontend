import React, { useState } from "react";
import axios from 'axios';


const Login = (props) => {
    const [credentials, setCredentials] = useState({ username: "", password: "" })
    const [error, setError] = useState("");

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const submit = e => {
        e.preventDefault();
        if (!credentials.username || !credentials.password) {
            return (setError("Username or Password not valid."));
        }

        axios.post('http://localhost:5000/api/login', credentials)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                props.history.push('/potluck');
            })
            .catch(err => {
                setError("Error logging in");
            })
    };

    return (
        <div>
            <h1>Welcome to Potluck Planner</h1>
            <div data-testid="loginForm" className="login-form">
                <form onSubmit={submit}>
                    <label >Username:</label>
                    <input
                        id="username"
                        data-testid="username"
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                    />

                    <label>Password:</label>
                    <input
                        id="password"
                        data-testid="password"
                        type="text"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                    <div>
                        <button data-testid="submit"
                            id="submit" >Login
                        </button>
                    </div>
                </form>
            </div>
            <p data-testid="errorMessage" id="error" className="error">{error}</p>
        </div>
    );
};

export default Login;


