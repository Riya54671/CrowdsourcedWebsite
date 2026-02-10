import React from 'react';
import { useNavigate } from 'react-router-dom';

const DiscussionThreadCard = ({ title, summary, author }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#1A1A38] border-2 border-white rounded-lg p-4 flex justify-between items-start hover:bg-[#2a2a3c] transition duration-300 font-roboto">
    <div>
      <h3 className="text-white font-semibold text-xl">{title}</h3>
      <p className="text-gray-300 text-xl">{summary}</p>
      <p className="text-gray-400 text-xl mt-1">Posted by {author}</p>
    </div>
    <button onClick={()=>navigate("/Thread")} className="text-2xl text-white px-4 py-1 rounded-xl bg-[#3b3b52] hover:bg-[#4a4a6a] transition border border-white">
      Comment
    </button>
  </div>
  
  );
};

export default DiscussionThreadCard;