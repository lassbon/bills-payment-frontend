import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from '../src/pages/Auth/Login/Login'
import Signup from '../src/pages/Auth/Signup/Signup'
import HomePage from './pages/HomePage/HomePage'
import SendOTP from './pages/Auth/VerifyOtp/VerifyOtp'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './assets/styles/toastify.css'
import StartForgetPassword from './pages/Auth/ForgetPassword/StartForgetPassword'
import CompleteForgetPassword from './pages/Auth/ForgetPassword/CompletedForgetPassword'

function App() {
  return (
    <>            
        <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              toastClassName="px-2 shadow-sm bg-green-400 rounded-md text-sm"
        />
          <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />    
          <Route path="/send-otp" element={<SendOTP />} />  
          <Route path="/start-forget-password" element={<StartForgetPassword />} />
          <Route path="/complete-forget-password/:hash" element={<CompleteForgetPassword />} />
          <Route path="*" element={<HomePage />} />
          </Routes>

          </BrowserRouter>
    </>
    
  )
}

export default App
