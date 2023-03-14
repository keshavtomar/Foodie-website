import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Navbar() {
    let navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-2" to="/">Foodie</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className='navbar-nav me-auto mb-2'>
                            <li className='nav-item'>
                                <Link className='nav-link active fs-5'>Home</Link>
                            </li>
                            {localStorage.getItem("authToken") ?
                                <li className='nav-item'>
                                    <Link className='nav-link active fs-5'>My Orders</Link>
                                </li>
                                : ""}
                        </ul>

                        {!localStorage.getItem("authToken") ? <div className='d-flex'>
                            <Link className="mx-2 btn bg-white text-success" to="/login">Login</Link>
                            <Link className="mx-2 btn bg-white text-success" to="/signup">Signup</Link>
                        </div>
                            :
                            <div>
                                <div className="mx-2 btn bg-white text-success" >My Cart</div>
                                <div className="mx-2 btn bg-white text-danger" onClick={handleLogout}>Logout</div>
                            </div>
                        }
                    </div>
                </div>
            </nav >
        </div >
    )
}
