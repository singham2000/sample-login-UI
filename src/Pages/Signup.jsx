import React from 'react';
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






const Signup = () => {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['name']);
    const [data, setdata] = React.useState({
        name: '',
        dob: '',
        email: '',
        password: ''
    })

    const signupHandle = (e) => {
        e.preventDefault();
        console.log(data);

        axios.post('http://localhost:5000/addUser', {
            name: data.name,
            dob: data.dob,
            email: data.email,
            password: data.password,
        })
            .then(function (response) {
                const res = response.data;
                if (res.status) {
                    navigate('/login');
                    setCookie('jwt', res.token);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className='w-screen h-screen bg-gradient-to-b from-cyan-700 to-teal-500 flex justify-center items-center'>
            <form autoComplete="off" className='drop-shadow-2xl w-96 h-1/2 bg-blue-200 p-4 rounded-xl'>
                <div className='w-full mb-2 flex justify-center items-center text-xl '>
                    <div className='w-28 h-14 p-2 bg-teal-500 absolute'>
                        <p className='flex justify-center items-center pt-2'>
                            SIGN UP
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-center flex-col h-full '>
                    <MDBInput className='mb-4' type='text' id='name' label='name' onChange={(e) => { setdata({ ...data, name: e.target.value }) }} />
                    <br />
                    <MDBInput className='mb-4' type='date' id='dob' label='Date of Birth' onChange={(e) => { setdata({ ...data, dob: e.target.value }) }} />
                    <br />
                    <MDBInput className='mb-4' type='email' id='email' label='email' onChange={(e) => { setdata({ ...data, email: e.target.value }) }} />
                    <br />
                    <MDBInput className='mb-4' type='password' id='password' label='password' onChange={(e) => { setdata({ ...data, password: e.target.value }) }} />
                    <br />
                    <MDBBtn type='submit' block onClick={signupHandle}>
                        SIGN UP
                    </MDBBtn>
                </div>
            </form>
        </div>
    )
}

export default Signup