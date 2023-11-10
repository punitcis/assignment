import React, { useState } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";

const ResetPassword = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const ResetPassword = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/resetPassword', {
                email: email,
                password: password,
                newPassword: newpassword,
                confirmPassword: confPassword
            });
            history.push("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={ResetPassword} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" autoComplete="off" placeholder="Email"
                                            value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Old Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" autoComplete="off" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">New Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" autoComplete="off" placeholder="******" value={newpassword} onChange={(e) => setNewPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Confirm New Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" autoComplete="off" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Reset-Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResetPassword
