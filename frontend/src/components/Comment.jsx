import React from "react";

const Comment = ({ username, datePosted, commentText }) => {
  return (
    <div className="border-t border-gray-600 py-4 font-roboto">
  <div className="flex items-center space-x-2">
    <div className="w-4 h-4 bg-white rounded-full"></div>
    <p className="text-white text-2xl font-semibold">{username}</p>
    <span className="text-gray-400 text-sm">Posted {datePosted}</span>
  </div>
  <p className="text-white text-xl ml-6 mt-1">{commentText}</p>
</div>

  );
};

export default Comment;