import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      alert(`Signed up successfully as ${role}!`);
    }
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1A1A38] font-roboto"  >
      <div className="p-8 w-96 rounded-lg shadow-lg bg-[#A1A1AA]/50">
        <h2 className="text-2xl font-bold text-white mb-6 text-center font-roboto">SIGN UP</h2>
        {showAlert && (
          <div className="bg-red-500 text-white text-sm p-2 rounded mb-4 text-center font-roboto">
            Passwords do not match!
          </div>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)} 
            className="w-full p-3 rounded bg-[#D9D9D9] text-gray font-roboto"
            required
          />
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)} 
            className="w-full p-3 rounded bg-[#D9D9D9] text-gray font-roboto"
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-3 rounded bg-[#D9D9D9] text-gray font-roboto"
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 rounded bg-[#D9D9D9] text-gray font-roboto"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 rounded bg-[#D9D9D9] text-gray font-roboto"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 rounded bg-[#D9D9D9] text-gray font-roboto"
            required
          >
            <option value="">Sign up as</option>
            <option value="Doctor">Doctor</option>
            <option value="Researcher">Researcher</option>
            <option value="Contributor">Contributor</option>
          </select>
          <button
            type="submit"
            className="w-full p-3 rounded bg-[#1A1A38] text-white font-roboto"
            onClick={() => {
              if (role === "Doctor") {
                console.log("Navigating to /SignupDoctor");
                navigate("/SignupDoctor");
              } else if (role === "Researcher") {
                console.log("Navigating to /SignupResearcher");
                navigate("/SignupResearcher");
              } else {
                console.log("Navigating to /dashboard");
                navigate("/dashboard");
              }
            }}
            
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;