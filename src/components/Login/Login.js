import { authActions } from 'actions/authActions';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import 'styles/login.css'

const Login = () => {
    const [user, setUser] = useState({});
    const dispatch = useDispatch();

    const onChange = e => {
        const {name, value} = e.target;

        setUser(user => ({
            ...user,
            [name]: value
        }));
    }

    const onSubmit = e => {
        e.preventDefault();

        dispatch(authActions.login(user));
    }

    return (
        <>
            <h1>
                Login
            </h1>

            <div className="login">
                {/* Connect this form with the WP JWT API. */}
                <form onSubmit={onSubmit} method="post">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input id="username" onChange={onChange} value={user.username || ""} type="text" name="username" autoComplete="new-password" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" onChange={onChange} value={user.password || ""} name="password" autoComplete="new-password" />
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;
