import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from '../src/pages/Auth/Login/Login'
import Signup from '../src/pages/Auth/Signup/Signup'
import HomePage from './pages/HomePage/HomePage'
import SendOTP from './pages/Auth/VerifyOtp/VerifyOtp'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />    
      <Route path="/send-otp" element={<SendOTP />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
