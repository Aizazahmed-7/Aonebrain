import './App.css';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import ForgotPassword from './ForgotPassowrd/ForgotPassword';
import Login from './Login/LoginPage';
import SignUp from './SignUp/SignUpPage';
import VerifyCode from './ForgotPassowrd/VerifyCode';
import ChangePassword from './ForgotPassowrd/ChangePassword';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path='/'  element={<Login/>} />
      <Route path='/forgotPassword'  element={<ForgotPassword/>} />
      <Route path='/signUp'  element={<SignUp/>} />
      <Route path='/verifCode' element={<VerifyCode></VerifyCode>} />
      <Route path='/ChangePassword' element={<ChangePassword></ChangePassword>} />
      </Routes>
    </Router>  
    </div>
  );
}

export default App;
