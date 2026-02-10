import React from 'react';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1A1A38] font-roboto">
     
      <div className="text-center mb-8 text-white">
        <h1 className="text-4xl font-bold">Welcome, Name!</h1>
      </div>
    
      <div className="p-8 w-96 rounded-lg shadow-lg bg-[#A1A1AA]/50">

        <h2 className="text-2xl font-bold text-white mb-6 text-center font-roboto">LOGIN</h2>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter Username/Email"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded bg-[#D9D9D9] text-gray font-roboto"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-[#D9D9D9] text-gray font-roboto"
            />
          </div>
          <div className="text-right">
            <a href="#" className="text-blue-400 font-roboto">Forgot Password?</a>
          </div>
          <div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 rounded bg-[#D9D9D9]/60 text-white font-roboto"
            >
              Login using Google
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="w-full p-3 rounded bg-[#1A1A38] text-white font-roboto font-bold"
              onClick={() => navigate("/dashboard")}
            >
              LOGIN
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <span className="text-white font-roboto">Not an user? </span>
          <a href="#" className="text-blue-400 font-roboto">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;