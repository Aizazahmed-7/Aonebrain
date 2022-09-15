import coverImg from './Images/cover2.jpg';
import logoImg from './Images/logo.png';
import './Login.css'

import { Link } from '@mui/material';
import {Typography} from '@mui/material';
import {useNavigate,useLocation} from 'react-router-dom'
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

const ForgotPassword = ()=>{

    
    function EmailField(){
    const [name, setName] = React.useState('');
    const handleChange = (event) => {
        setName(event.target.value);
    };
    return(
        <TextField
            id="outlined-name"
            label="Email"
            value={name}
            onChange={handleChange}
        />
    )
}



    
    const navigate = useNavigate()
    const submitHandler = (e) => {
        navigate('/verifCode')
    }
    const CredentialForm=()=>{
        return(
            <div className='user-area'>
                <div className='brand'>
                    <img src={logoImg} className="logo-img"></img>
                    <div><h1>Forgot Password</h1></div>
                </div>
             

                <div className="input-form">
                    <div className='textbox'><EmailField/></div>
                </div>
                <div className='login-btn w-100'>
                    <Button type="submit" fullWidth variant="contained" onClick={submitHandler} sx={{ mt: 3, mb: 2 }}>
                        Send Email
                    </Button>
                </div>       
              
                </div>
            
        );
    }

    return(
        <div className="container">
            <div className="main">
                <div className="login">
                    {<CredentialForm/>}
                </div>
                <div className="info">
                    <img src={coverImg} className="cover-img"></img>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;