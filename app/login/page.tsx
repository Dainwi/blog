'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import style from './page.module.css';
import loginUser from '../api/login'

const Page: React.FC = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    function login(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (user.email === '' || user.password === '') {
            alert('Please fill all the fields');
            return;
        }
        loginUser(user);
    }

    return (
        <section>
            <div className={style.container}>
                <h2>Welcome back</h2>
                <form onSubmit={login}>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={user.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={user.password}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Login</button>
                </form>
                <p>
                    New user? <Link href="/register">Register here</Link>
                </p>
            </div>
        </section>
    );
};

export default Page;
