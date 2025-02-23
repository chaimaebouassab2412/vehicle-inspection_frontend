import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:2018/api/utilisateurs/login', {
                email,
                motDePasse: password
            });

            // Store the JWT Token
            localStorage.setItem('token', response.data.token);
            
            // Redirect to the dashboard
            navigate('/portal/dashboard');
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>

                                    {error && <p className="text-danger text-center">{error}</p>}

                                    <form className="user" onSubmit={handleLogin}>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control form-control-user"
                                                id="exampleInputEmail"
                                                placeholder="Enter Email Address..."
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control form-control-user"
                                                id="exampleInputPassword"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-user btn-block">
                                            Login
                                        </button>
                                    </form>
                                    
                                    <hr />
                                    <div className="text-center">
                                        <Link className="small" to="/forgot-password">Forgot Password?</Link>
                                    </div>
                                    <div className="text-center">
                                        <Link className="small" to="/register">Create an Account!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
