import axios from 'axios';
import {React,useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';

function Register() {
    const [Registerdata,setRegisterData] = useState();
    useEffect( () => {
        axios.get('/').then(res => setRegisterData(res.data));
        });
        console.log(Registerdata);
  return (

    <div>
     <Button>Register</Button>
    </div>
  )

}

export default Register
