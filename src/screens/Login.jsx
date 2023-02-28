import React, { useState } from 'react'
import { json, Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
    const [loginCredentials, setloginCredentials] = useState({
        email: "",
        password: ""
    })

    function handleChange(event) {
        setloginCredentials({
            ...loginCredentials,
            [event.target.name]: event.target.value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: loginCredentials.email,
                password: loginCredentials.password
            })
        })

        const json = await response.json();
        const userFound = json.success;
        if (userFound) {
            setloginCredentials({
                email: "",
                password: ""
            })
            toast.success('Registered Successfully', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            toast.error('Invalid username or password!', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }


    return (
        <div>
            <ToastContainer />
            <section className="forms-section">
                <div className="forms">
                    <div className="form-wrapper is-active">
                        <button type="button" className="switcher switcher-login">
                            <Link to="/login" className="switcher-login" style={{ textDecoration: "none" }}> Login </Link>
                            <span className="underline"></span>
                        </button>
                        <form className="form form-login">
                            <fieldset>
                                <legend>Please, enter your email and password for login.</legend>
                                <div className="input-block">
                                    <label htmlFor="login-email">E-mail</label>
                                    <input id="login-email" name='email' value={loginCredentials.email} type="email" required onChange={handleChange} />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="login-password">Password</label>
                                    <input id="login-password" name='password' value={loginCredentials.password} type="password" required onChange={handleChange} />
                                </div>
                            </fieldset>
                            <button type="submit" className="btn-login" onClick={handleSubmit}>Login</button>
                        </form>
                    </div>
                    <div className="form-wrapper">
                        <button type="button" className="switcher switcher-signup">
                            <Link to="/signup" className="switcher-login" style={{ textDecoration: "none", color: "white" }}> Signup </Link>
                            <span className="underline"></span>
                        </button>
                        <form className="form form-signup">
                            <fieldset>
                                <legend>Please, enter your email, password and password confirmation for sign up.</legend>
                                <div className="input-block">
                                    <label htmlFor="signup-username">Name</label>
                                    <input name="name" id="signup-email" type="text" required />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="signup-email">E-mail</label>
                                    <input id="signup-email" type="email" required />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="signup-password">Password</label>
                                    <input id="signup-password" type="password" required />
                                </div>
                            </fieldset>
                            <button type="submit" className="btn-signup">Sign Up</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
