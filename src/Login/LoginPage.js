import coverImg from './Images/cover2.jpg';
import logoImg from './Images/logo.png';
import './Login.css'

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

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">Your Website</Link>{' '}
        {new Date().getFullYear()}{'.'}
      </Typography>
    );
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

const Login = ()=>{

    const CredentialForm=()=>{
        return(
            <div className='user-area'>
                <div className='brand'>
                    <img src={logoImg} className="logo-img"></img>
                    <div><h1>Sign In</h1></div>
                </div>
                <div className="input-form">
                    <div className='textbox'><EmailField/></div>
                    <div className='textbox'><PasswordField/></div>
                </div>
                <div className='login-btn'>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Sign In
                    </Button>
                </div>
                <div class="additional">
                    <div class="redirects">
                        <a href="/forgotPassword" class="forgot"><i class="fa-sharp fa-solid fa-person-circle-question"></i> Forgot Password</a>
                        <a href="/signUp" class="signup"><i class="fa-solid fa-user-plus"></i> Sign Up</a>
                    </div>
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

export default Login;