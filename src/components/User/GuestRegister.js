import React from 'react'
import axios from "axios";
import Title from './WelcomeTitle';
import {FormDiv, Div, Main} from './theme';



export default function GuestRegister(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://workout-journal-backend.herokuapp.com/api/auth/register')
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            props.history.push('/dashboard');
        })
        .catch(err => console.log(err));
    };

    return (
        <Div>
            <Main>
                <Title/>
                <FormDiv>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="username" placeholder="Enter Username"/>
                        <input type="password" name="password" placeholder="Enter Password"/>
                        <button type="submit">Let's Get Started!</button>
                    </form>
                </FormDiv>
            </Main>
        </Div>
    )
}