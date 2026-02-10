import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignupResearcher = () => {
  const [institute, setInstitute] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [position, setPosition] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append('institute', institute);   // Make sure the field name matches the backend
    formData.append('fieldOfStudy', fieldOfStudy);        // Match this too
    formData.append('position', position); 
    
    e.preventDefault();
    if (!institute || !fieldOfStudy || !position) {
      alert("Please fill all fields!");
      return;
    }
    alert('Signed up successfully!');
    // Further submit logic here
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1A1A38] font-roboto">
      <div className="p-8 w-96 rounded-lg shadow-lg bg-[#A1A1AA]/50">
        <h2 className="text-4xl font-bold text-white mb-6 text-center font-roboto">SIGN UP</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Institute"
            value={institute}
            onChange={(e) => setInstitute(e.target.value)}
            className="w-full p-3 rounded bg-[#D9D9D9] text-gray font-roboto"
            required
          />
          <input
            type="text"
            placeholder="Enter Field of Study"
            value={fieldOfStudy}
            onChange={(e) => setFieldOfStudy(e.target.value)}
            className="w-full p-3 rounded bg-[#D9D9D9] text-gray font-roboto"
            required
          />
          <input
            type="text"
            placeholder="Enter Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full p-3 rounded bg-[#D9D9D9] text-gray font-roboto"
            required
          />

          <button
            type="submit"
            className="w-full p-3 rounded bg-[#1A1A38] text-white font-roboto hover:bg-[#2E2E4D] transition"
            onClick={()=>navigate("/dashboard")}
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupResearcher;