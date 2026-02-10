import React from 'react';
import DiscussionThreadCard from './components/DiscussionThreadCard';
import SearchComponent from './components/Search';
import {useNavigate} from "react-router-dom";

const Discussions = () => {
  const dummyData = Array(5).fill({
    title: 'Pneumonia Detection using FA-Net Fuzzy',
    summary: 'Summary of the post',
    author: 'UserName',
  });

  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-[#1A1A38] text-white font-Roboto">
      {/* Sidebar - Fixed width */}
      <div className="w-20 flex-shrink-0 flex flex-col items-center py-6 space-y-8 bg-[#1A1A38] border-r border-white/10">
      <div className="w-10 h-10 flex items-center justify-center">
    <svg width="40" height="40" viewBox="0 0 48 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="2.5" x2="48" y2="2.5" stroke="white" strokeWidth="5" />
      <line y1="14.5" x2="48" y2="14.5" stroke="white" strokeWidth="5" />
      <line y1="26.5" x2="48" y2="26.5" stroke="white" strokeWidth="5" />
    </svg>
  </div>

  {/* Home Icon */}
  <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-white/10 rounded-lg transition">
    <svg width="70" height="70" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_2_27)">
        <circle cx="42" cy="40" r="40" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M32.5 15.8333C32.5 14.1536 33.1673 12.5427 34.355 11.355C35.5427 10.1673 37.1536 9.5 38.8333 9.5H45.1667C46.8464 9.5 48.4573 10.1673 49.645 11.355C50.8327 12.5427 51.5 14.1536 51.5 15.8333V28.5H64.1667C65.8464 28.5 67.4573 29.1673 68.645 30.355C69.8327 31.5427 70.5 33.1536 70.5 34.8333V41.1667C70.5 42.8464 69.8327 44.4573 68.645 45.645C67.4573 46.8327 65.8464 47.5 64.1667 47.5H51.5V60.1667C51.5 61.8464 50.8327 63.4573 49.645 64.645C48.4573 65.8327 46.8464 66.5 45.1667 66.5H38.8333C37.1536 66.5 35.5427 65.8327 34.355 64.645C33.1673 63.4573 32.5 61.8464 32.5 60.1667V47.5H19.8333C18.1536 47.5 16.5427 46.8327 15.355 45.645C14.1673 44.4573 13.5 42.8464 13.5 41.1667V34.8333C13.5 33.1536 14.1673 31.5427 15.355 30.355C16.5427 29.1673 18.1536 28.5 19.8333 28.5H32.5V15.8333Z" fill="#FFB74D" />
      </g>
      <defs>
        <filter id="filter0_d_2_27" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="2" dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.57 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_27" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_27" result="shape" />
        </filter>
      </defs>
    </svg>
  </div>

  {/* Add Dataset Icon */}
  <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-white/10 rounded-lg transition">
    <svg width="60" height="60" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_2_32)">
        <path d="M19.69 73.3333C18.3382 73.3333 17.1869 72.8603 16.236 71.9143C15.2827 70.9683 14.806 69.8195 14.806 68.4677V62.1353L27.786 50.6V73.3333H19.69ZM30.8843 73.3333V60.3607H57.1157V73.3333H30.8843ZM60.2177 73.3333V46.6877L46.2367 34.342L56.0597 25.6593L71.5697 39.3873C72.0879 39.8909 72.4876 40.4531 72.7687 41.074C73.0522 41.6973 73.194 42.361 73.194 43.065V68.4493C73.194 69.8011 72.721 70.9537 71.775 71.907C70.829 72.8603 69.6801 73.3358 68.3283 73.3333H60.2177ZM14.8097 57.8893V43.1127C14.8097 42.4111 14.9502 41.7377 15.2313 41.0923C15.5124 40.447 15.9121 39.8787 16.4303 39.3873L40.7587 17.8273C41.2476 17.3849 41.7658 17.0683 42.3133 16.8777C42.8633 16.687 43.4268 16.5917 44.0037 16.5917C44.5806 16.5917 45.1428 16.687 45.6903 16.8777C46.2379 17.0683 46.7561 17.3849 47.245 17.8273L53.7313 23.628L14.8097 57.8893Z" fill="white"/>
      </g>
      <defs>
        <filter id="filter0_d_2_32" x="-2" y="0" width="96" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="2" dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.57 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_32"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_32" result="shape"/>
        </filter>
      </defs>
    </svg>
  </div>

  {/* Datasets Icon */}
  <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-white/10 rounded-lg transition">
    <svg width="60" height="60" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_2_36)">
        <path d="M9.5 66.5V9.5H66.5V66.5H9.5ZM15.8333 60.1667H60.1667V15.8333H15.8333V60.1667ZM22.1667 34.8333H34.8333V22.1667H22.1667V34.8333ZM41.1667 34.8333H53.8333V22.1667H41.1667V34.8333ZM22.1667 53.8333H34.8333V41.1667H22.1667V53.8333ZM41.1667 53.8333H53.8333V41.1667H41.1667V53.8333Z" fill="#A1A1AA"/>
      </g>
      <defs>
        <filter id="filter0_d_2_36" x="-2" y="0" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="2" dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.57 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_36"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_36" result="shape"/>
        </filter>
      </defs>
    </svg>
  </div>

  {/* Discussions Icon */}
  <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-white/10 rounded-lg transition">
    <svg width="60" height="60" viewBox="0 0 76 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_2_34)">
        <path d="M19 44.3334H44.3333V38H19V44.3334ZM19 34.8334H57V28.5H19V34.8334ZM19 25.3334H57V19H19V25.3334ZM6.33334 69.6667V12.6667C6.33334 10.925 6.95401 9.4346 8.19534 8.19537C9.43668 6.95615 10.9271 6.33549 12.6667 6.33337H63.3333C65.075 6.33337 66.5665 6.95404 67.8078 8.19537C69.0492 9.43671 69.6688 10.9272 69.6667 12.6667V50.6667C69.6667 52.4084 69.0471 53.8999 67.8078 55.1412C66.5686 56.3825 65.0771 57.0021 63.3333 57H19L6.33334 69.6667ZM16.3083 50.6667H63.3333V12.6667H12.6667V54.2292L16.3083 50.6667Z" fill="#A1A1AA"/>
      </g>
      <defs>
        <filter id="filter0_d_2_34" x="-2" y="0" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="2" dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.57 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_34"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_34" result="shape"/>
        </filter>
      </defs>
    </svg>
  </div>

  {/* Tasks/Goals Icon */}
  <div  onClick={()=>navigate("/yourwork")} className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-white/10 rounded-lg transition">
    <svg width="60" height="60" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_7_53)">
        <path d="M34.45 52.1625L57.3625 29.25L52.8125 24.7L34.45 43.0625L25.1875 33.8L20.6375 38.35L34.45 52.1625ZM16.25 68.25C14.4625 68.25 12.9328 67.6141 11.661 66.3423C10.3892 65.0704 9.75217 63.5397 9.75 61.75V16.25C9.75 14.4625 10.387 12.9328 11.661 11.661C12.935 10.3892 14.4647 9.75217 16.25 9.75H29.9C30.6042 7.8 31.7828 6.22917 33.436 5.0375C35.0892 3.84583 36.9438 3.25 39 3.25C41.0562 3.25 42.9119 3.84583 44.5672 5.0375C46.2226 6.22917 47.4002 7.8 48.1 9.75H61.75C63.5375 9.75 65.0682 10.387 66.3423 11.661C67.6162 12.935 68.2522 14.4647 68.25 16.25V61.75C68.25 63.5375 67.6141 65.0682 66.3423 66.3423C65.0704 67.6162 63.5397 68.2522 61.75 68.25H16.25ZM39 13.8125C39.7042 13.8125 40.287 13.5818 40.7485 13.1203C41.21 12.6588 41.4397 12.077 41.4375 11.375C41.4353 10.673 41.2046 10.0913 40.7452 9.62975C40.2859 9.16825 39.7042 8.9375 39 8.9375C38.2958 8.9375 37.7141 9.16825 37.2548 9.62975C36.7954 10.0913 36.5647 10.673 36.5625 11.375C36.5603 12.077 36.7911 12.6598 37.2548 13.1235C37.7184 13.5872 38.3002 13.8168 39 13.8125Z" fill="#A1A1AA"/>
      </g>
      <defs>
        <filter id="filter0_d_7_53" x="-2" y="0" width="86" height="86" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="2" dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.57 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_53"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_53" result="shape"/>
        </filter>
      </defs>
    </svg>
  </div>
      </div>

    
      <div className="flex-1 flex flex-col min-h-0"> 
        <div className="flex items-center justify-between p-4 bg-[#1A1A38] border-b border-white/10">
          <div className="absolute left-20 top-0">
            <SearchComponent />
          </div>
          <div className="w-20 h-20 rounded-full bg-gray-400 flex items-center justify-center absolute right-5">
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6"> {/* Added overflow-y-auto */}
          {/* Header */}
          <div className="mb-6">
            <h1 className="mt-10 text-4xl font-Roboto">Discussions</h1>
            <p className="text-gray-400 text-m text-Roboto">
              Discuss new technology, ask questions, share feedback and more.
            </p>
          </div>

          {/* Create Thread Button */}
          <button className="bg-white text-black px-2 py-2 text-xl font-Roboto rounded font-semibold w-fit mb-6 flex items-center gap-2">
          <svg width="25" height="25" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.9998 16.6666H27.3332V5.99996C27.3332 4.58547 26.7713 3.22892 25.7711 2.22872C24.7709 1.22853 23.4143 0.666626 21.9998 0.666626C20.5854 0.666626 19.2288 1.22853 18.2286 2.22872C17.2284 3.22892 16.6665 4.58547 16.6665 5.99996L16.8558 16.6666H5.99984C4.58535 16.6666 3.22879 17.2285 2.2286 18.2287C1.22841 19.2289 0.666504 20.5855 0.666504 22C0.666504 23.4144 1.22841 24.771 2.2286 25.7712C3.22879 26.7714 4.58535 27.3333 5.99984 27.3333L16.8558 27.144L16.6665 38C16.6665 39.4144 17.2284 40.771 18.2286 41.7712C19.2288 42.7714 20.5854 43.3333 21.9998 43.3333C23.4143 43.3333 24.7709 42.7714 25.7711 41.7712C26.7713 40.771 27.3332 39.4144 27.3332 38V27.144L37.9998 27.3333C39.4143 27.3333 40.7709 26.7714 41.7711 25.7712C42.7713 24.771 43.3332 23.4144 43.3332 22C43.3332 20.5855 42.7713 19.2289 41.7711 18.2287C40.7709 17.2285 39.4143 16.6666 37.9998 16.6666Z" fill="#1A1A38"/>
</svg>

  Create Thread
</button>


          {/* Threads List */}
          <div className="space-y-4 pb-6"> {/* Added pb-6 for bottom padding */}
            {dummyData.map((post, index) => (
              <DiscussionThreadCard
                key={index}
                title={post.title}
                summary={post.summary}
                author={post.author}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussions;