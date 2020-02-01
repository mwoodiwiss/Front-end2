import React, {useState} from 'react'
import Title from './WelcomeTitle';
import {FormDiv, Div, Main} from './theme';
import axiosWithAuth from '../../Auth/axiosWithAuth';



export default function GuestLogin(props) {
    

    const [err, setErr] = useState();

    const [data, setData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axiosWithAuth()
            .post('/api/auth/login', data)
            .then(result => {
                localStorage.setItem('token', result.data.token)
                props.history.push('/dashboard')
                
            })
            .catch(e => {
                setErr(e.response.data)
            })
    }

    return (
        <Div>
            <Main>
                <Title/>
                <FormDiv>
                    <form onSubmit={handleSubmit}>
                    {err && <div className='errors'> {err}</div>}
                            <input 
                            type="text" 
                            name="username" 
                            placeholder="Enter Username"
                            value={data.username}
                            onChange={handleChange}
                            />
                            <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter Password"
                            value={data.password}
                            onChange={handleChange}/>
                            <button type="submit">Have a great workout!</button>
                    </form>
                </FormDiv>
            </Main>
        </Div>
    )
}