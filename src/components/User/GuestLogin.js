import React from 'react'
import Title from './WelcomeTitle';
import {FormDiv, Body, Main} from './theme';



export default function GuestLogin() {
    return (
        <Body>
            <Main>
                <Title/>
                <FormDiv>
                    <form>
                        <input type="text" name="username" placeholder="Enter Username or Email"/>
                        <input type="password" name="password" placeholder="Enter Password"/>
                        <button type="submit">Have a great workout!</button>
                    </form>
                </FormDiv>
            </Main>
        </Body>
    )
}