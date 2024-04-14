import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Auth/SignUp';
import Login from './Auth/Login';
import ForgotPassword from './Auth/ForgotPassword';
import ResetPassword from './Auth/ResetPassword';
import Home from './pages/Home';
import Logout from './pages/Logout';
import Land from './pages/Land';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/' element={<Land />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
