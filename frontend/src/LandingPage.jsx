import React from 'react';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8 md:px-20 py-12 font-Roboto">
      <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-16 w-full max-w-6xl">
        
        <div className="relative">
          <img 
            src="https://img.freepik.com/premium-vector/bioengineering-isolated-cartoon-vector-illustrations_107173-21694.jpg?w=826" 
            alt="Healthcare Illustration" 
            className="max-w-sm md:max-w-md" 
          />
        </div>
        
        <div className="text-center md:text-left max-w-xl w-full font-roboto">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 font-Roboto">
            Join a community where medical minds connect, share, and innovate—advancing healthcare together.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 font-roboto">
            A collaborative platform for doctors, researchers, radiologists, and healthcare professionals to share knowledge, support each other, and drive medical innovation.
          </p>

          
          <div className="flex flex-col items-end mr-55 space-y-4">
            <button   onClick={() => navigate("/Login")} className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 w-44 font-roboto">
              Login
            </button>
            <button  onClick={() => navigate("/SignUp")} className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 w-44 font-roboto">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;