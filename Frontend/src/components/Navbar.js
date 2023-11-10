import React from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <h1 className="navbar-item" >
                         <b>CIS DEMO</b>
                    </h1>

                    <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                        {/* {token && ( */}
                            <>
                                <Link to="/reset-password" className="navbar-item">
                                    Reset Password
                                </Link>
                                <Link to="/dashboard" className="navbar-item">
                                    Dashboard
                                </Link>
                            </>
                        {/* )} */}
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <button onClick={Logout} className="button is-light">
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
