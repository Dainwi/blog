'use client';
import React, { useState } from 'react';
import style from './page.module.css';
import Link from 'next/link';
import createUser from '../api/register'


const Page: React.FC = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = event.target;
        setUser({ ...user, [id]: value });
    }


    function signup(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Prevent the form from submitting and reloading the page
        if (user.name === '' || user.email === '' || user.password === '') {
            alert('Please fill all the fields');
            return;
        }
        alert('User created successfully');
        createUser(user);
        console.log(user);
    }

    return (
        <section>
            <div className={style.container}>
                <h2>Register</h2>
                <form id="signup-form" onSubmit={signup}>
                    <input type="text" id="name" placeholder="Name" onChange={handleInputChange} />
                    <input type="email" id="email" placeholder="Email" onChange={handleInputChange} />
                    <input type="password" id="password" placeholder="Password" onChange={handleInputChange} />
                    <button type="submit">Sign up</button>
                </form>
                <p>Already have an account? <Link href="/login">Login here</Link></p>
            </div>

        </section>
    )
}

export default Page;