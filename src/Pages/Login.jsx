/* eslint-disable no-unused-vars */
import React from 'react'
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';



const Login = () => {
    const [cookies, setCookie] = useCookies(['name']);
    const navigate = useNavigate();
    const [data, setdata] = React.useState({
        name: '',
        password: ''
    })

    const loginHandle = (e) => {
        e.preventDefault();
        console.log(data);

        axios.post('http://localhost:5000/login', {
            name: data.name,
            password: data.password,
        })
            .then(function (response) {
                const res = response.data;
                if (res.status) {
                    navigate('/');
                    setCookie('jwt', res.token);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='w-screen h-screen bg-gradient-to-b from-cyan-700 to-teal-500 flex justify-center items-center'>
            <form className='drop-shadow-2xl w-96 h-1/2 bg-blue-200 p-4 rounded-xl'>
                <div className='w-full flex justify-center items-center text-xl '>
                    <div className='w-28 h-16 p-2 bg-teal-500 absolute'>
                        <p className='flex justify-center items-center pt-2'>
                            SIGN IN
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-center flex-col h-full '>
                    <MDBInput className='mb-4' type='text' id='username' label='username' onChange={(e) => { setdata({ ...data, name: e.target.value }) }} />
                    <br />
                    <MDBInput className='mb-4' type='password' id='password' label='password' onChange={(e) => { setdata({ ...data, password: e.target.value }) }} />

                    <MDBRow className='mb-4 mt-4'>
                        <MDBCol className='d-flex justify-content-center'>
                            <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
                        </MDBCol>
                        <MDBCol>
                            <a href='#!'>Forgot password?</a>
                        </MDBCol>
                    </MDBRow>

                    <MDBBtn block onClick={loginHandle}>
                        LOGIN
                    </MDBBtn>
                </div>
            </form>
        </div>
    )
}

export default Login