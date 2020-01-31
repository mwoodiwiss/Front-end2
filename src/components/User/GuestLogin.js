import React from 'react'
import axios from "axios";
import Title from './WelcomeTitle';
import {FormDiv, Body, Main} from './theme';



export default function GuestLogin(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://workout-journal-backend.herokuapp.com/api/login')
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            props.history.push('/dashboard');
        });
    };

    return (
        <Body>
            <Main>
                <Title/>
                <FormDiv>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="username" placeholder="Enter Username"/>
                        <input type="password" name="password" placeholder="Enter Password"/>
                        <button type="submit">Have a great workout!</button>
                    </form>
                </FormDiv>
            </Main>
        </Body>
    )
}