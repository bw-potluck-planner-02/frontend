import React, { useState } from 'react';

function Login() {
    const [user, setUser] = useState({ username: '', password: '' });

    const handleLoginChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h2>LogIn</h2>
            <form onSubmit={handleLoginSubmit}>
                <label htmlFor='username'>Username</label>
                <input
                    id='username'
                    value={user.username}
                    name='username'
                    onChange={handleLoginChange}
                />

                <label htmlFor='password'>Password</label>
                <input
                    id='password'
                    value={user.password}
                    name='password'
                    onChange={handleLoginChange}
                />
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
