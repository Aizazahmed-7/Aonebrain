import coverImg from './images/globe.jpg'
import logoImg from './images/logo.png';
import './SignUp.css';

import { Link } from '@mui/material';
import {Typography} from '@mui/material';

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

function NameField(){
    const [name, setName] = React.useState('');
    const handleChange = (event) => {
        setName(event.target.value);
    };
    return(
        <TextField
            id="outlined-name"
            label="Name"
            value={name}
            onChange={handleChange}
        />
    )
}


function PasswordField(){
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };    
    return(
        <FormControl sx={{ m: 1, width: '26.25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput id="outlined-adornment-password" type={values.showPassword ? 'text' : 'password'} value={values.password} onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
    );
}

function ConfirmPasswordField(){
    const [values, setValues] = React.useState({
        confirmPassword: '',
        showConfirmPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowConfirmPassword = () => {
        setValues({
            ...values,
            showConfirmPassword: !values.showConfirmPassword,
        });
    };
    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    };    
    return(
        <FormControl sx={{ m: 1, width: '26.25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput id="outlined-adornment-password" type={values.showConfirmPassword ? 'text' : 'password'} value={values.confirmPassword} onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowConfirmPassword} onMouseDown={handleMouseDownConfirmPassword} edge="end">
                  {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
    );
}



const SignUp = ()=>{

    const CredentialForm=()=>{
        return(
            <div className='user-area'>
                <div className='brand'>
                    {/* <img src={logoImg} className="logo-img"></img> */}
                    <div><h1>Sign Up</h1></div>
                </div>
                <div className="input-form">
                    <div className='textbox'><NameField/></div>
                    <div className='textbox'><EmailField/></div>
                    <div className='textbox'><PasswordField/></div>
                    <div className='textbox'><ConfirmPasswordField/></div>
                </div>
                <div className='signUp-btn'>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Sign Up
                    </Button>
                </div>
                <div class="additional">
                   
                    <div class="alternatives">
                        <Button variant="outlined" startIcon={<i class="fa-brands fa-facebook"></i>}>Facebook</Button>
                        <Button variant="outlined" color="error" startIcon={<i class="fa-brands fa-google"></i>}>Google</Button>
                    </div>
                </div>
            </div>
        );
    }

    return(
        <div className="container">
            <div className="main">
                <div className="sign-up">
                    {<CredentialForm/>}
                </div>
                <div className="info">
                    <img src={coverImg} className="cover-img"></img>
                </div>
            </div>
        </div>
    )
}

export default SignUp;