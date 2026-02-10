import React, { useState } from 'react';
import { FiUpload } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const SignupDoctor = () => {
  const [specialization, setSpecialization] = useState('');
  const [hospital_clinic, setHospital] = useState('');
  const [license_file_type, setLicense] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('specialization', specialization);
    formData.append('hospital_clinic', hospital_clinic);
    formData.append('license_file', license_file_type);

    if (!specialization || !hospital_clinic || !license_file_type) {
      alert("Please fill all fields and upload license!");
      return;
    }

    alert('Signed up successfully!');

    // Example: You would send formData to your backend here using fetch or axios

    navigate("/dashboard");  // ✅ Moved navigation here after successful validation
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1A1A38] font-roboto">
      <div className="p-8 w-96 rounded-lg shadow-lg bg-[#A1A1AA]/50">
        <h2 className="text-4xl font-bold text-white mb-6 text-center font-roboto">SIGN UP</h2>

        {showAlert && (
          <div className="bg-red-500 text-white text-sm p-2 rounded mb-4 text-center font-roboto">
            File size must be less than 1MB!
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="w-full p-3 rounded bg-[#D9D9D9] text-gray font-roboto"
            required
          />
          <input
            type="text"
            placeholder="Enter Hospital/Clinic"
            value={hospital_clinic}  // ✅ fixed binding
            onChange={(e) => setHospital(e.target.value)}
            className="w-full p-3 rounded bg-[#D9D9D9] text-gray font-roboto"
            required
          />

          <div>
            <label className="block mb-2 text-white font-roboto">Upload License (Max 1MB)</label>
            <div className="relative">
              <input
                id="license-upload"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="hidden"
                required
              />
              <label
                htmlFor="license-upload"
                className="flex items-center justify-left gap-2 cursor-pointer w-[120px] p-2 bg-[#D9D9D9] text-lg text-gray rounded font-roboto hover:bg-[#2E2E4D] transition"
              >
                <FiUpload /> Upload
              </label>
              {license_file_type && (  // ✅ corrected file state
                <p className="text-sm text-white mt-2 text-center font-roboto">
                  Selected: {license_file_type.name}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded bg-[#1A1A38] text-white font-roboto hover:bg-[#2E2E4D] transition"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupDoctor;