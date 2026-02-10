import React, { useState } from 'react';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const data = ['Pneumonia', 'Covid', 'Lung disease', 'Disease', 'Dengue', 'Malaria', 'Chickenpox', 'infectious disease'];

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="absolute top-0 z-50 w-[1200px] h-[72px] rounded-[40px] border-4 border-white flex items-center px-6 gap-4 left-0 right-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 52 52"
          fill="none"
        >
          <path
            d="M42.4667 45.5L28.8167 31.85C27.7333 32.7167 26.4875 33.4028 25.0792 33.9083C23.6708 34.4139 22.1722 34.6667 20.5833 34.6667C16.6472 34.6667 13.3163 33.3031 10.5907 30.576C7.865 27.8489 6.50145 24.518 6.5 20.5833C6.49856 16.6487 7.86211 13.3178 10.5907 10.5907C13.3192 7.86356 16.6501 6.5 20.5833 6.5C24.5166 6.5 27.8482 7.86356 30.5782 10.5907C33.3082 13.3178 34.671 16.6487 34.6667 20.5833C34.6667 22.1722 34.4139 23.6708 33.9083 25.0792C33.4028 26.4875 32.7167 27.7333 31.85 28.8167L45.5 42.4667L42.4667 45.5ZM20.5833 30.3333C23.2917 30.3333 25.5941 29.3858 27.4907 27.4907C29.3872 25.5956 30.3348 23.2931 30.3333 20.5833C30.3319 17.8736 29.3843 15.5718 27.4907 13.6782C25.597 11.7845 23.2946 10.8362 20.5833 10.8333C17.8721 10.8304 15.5704 11.7787 13.6782 13.6782C11.7859 15.5776 10.8377 17.8793 10.8333 20.5833C10.829 23.2873 11.7773 25.5898 13.6782 27.4907C15.5791 29.3916 17.8808 30.3391 20.5833 30.3333Z"
            fill="#D9D9D9"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="font-roboto text-[32px] text-[#D9D9D9] font-normal bg-transparent focus:outline-none w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div>
        {searchTerm && (
          <ul className="mt-4">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <li key={index} className="p-1">{item}</li>
              ))
            ) : (
              <li className="p-1 text-gray-400">No results found</li>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchComponent;
