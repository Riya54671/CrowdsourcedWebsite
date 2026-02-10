import React from "react";
import SearchComponent from "./components/Search"; 
import {useNavigate} from "react-router-dom";

const activities = [
  { action: "Uploaded a dataset on pneumonia" },
  { action: "Uploaded a dataset on pneumonia" },
  { action: "Labelled a dataset on pneumonia" },
  { action: "Posted a thread" },
  { action: "Uploaded a dataset on pneumonia" },
  { action: "Labelled a dataset on pneumonia" },
];

export default function DashboardScreen() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen bg-[#1A1A38] text-white font-Roboto">
     
    {/* Sidebar */}
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
  <div onClick={()=>navigate("/dataset")}  className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-white/10 rounded-lg transition">
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
  <div onClick={()=>navigate("/discussions")} className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-white/10 rounded-lg transition">
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
  <div onClick={()=>navigate("/yourwork")} className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-white/10 rounded-lg transition">
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

    
<div className="flex-1 relative overflow-y-auto px-6 py-4">
  {/* Search stays fixed at top with visibility */}
  <div className="relative top-4 left-4 w-full max-w-md z-10 mb-4">
    <SearchComponent />
  </div>

  {/* Profile Circle positioned on the right side of the sidebar */}
  <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-gray-400 flex items-center justify-center text-white">
   
  </div>




  {/* Push content down so it's not overlapped by search */}
  <div className="pt-24 max-w-6xl mx-auto text-white">
    
    {/* Welcome */}
    <h1 className="text-5xl font-semibold mb-10 text-center md:text-left -ml-2 font-Roboto">
  Welcome!, Priya
</h1>


<div className="text-white p-6 font-roboto">
  {/* Stats Section */}
  <div className="flex justify-between mb-8 border-b border-white/10 pb-6">
    {/* Datasets */}
    <div className="flex-1 pr-4 border-r border-white/10">
      <div className="flex flex-col items-center ">
        <div className="flex items-center space-x-3 w-full ml-35">
          <svg width="30" height="30" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 49V7H56V49H14ZM18.6667 44.3333H51.3333V11.6667H18.6667V44.3333ZM23.3333 25.6667H32.6667V16.3333H23.3333V25.6667ZM37.3333 25.6667H46.6667V16.3333H37.3333V25.6667ZM23.3333 39.6667H32.6667V30.3333H23.3333V39.6667ZM37.3333 39.6667H46.6667V30.3333H37.3333V39.6667Z" fill="white"/>
          </svg>
          <p className="text-4xl font-medium">Datasets</p>
        </div>
        <p className="text-5xl font-bold my-2">0</p>
        <p className="text-sm text-white/70">total uploaded</p>
      </div>
    </div>

    {/* Verified */}
    <div className="flex-1 px-4 border-r border-white/10">
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-3 w-full ml-35">
          <svg width="30" height="30" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 4.66663C15.1667 4.66663 4.66666 15.1666 4.66666 28C4.66666 40.8333 15.1667 51.3333 28 51.3333C40.8333 51.3333 51.3333 40.8333 51.3333 28C51.3333 15.1666 40.8333 4.66663 28 4.66663ZM23.3333 39.6666L11.6667 28L14.9567 24.71L23.3333 33.0633L41.0433 15.3533L44.3333 18.6666L23.3333 39.6666Z" fill="white"/>
          </svg>
          <p className="text-4xl font-medium">Verified</p>
        </div>
        <p className="text-5xl font-bold my-2">0</p>
        <p className="text-sm text-white/70">total verified</p>
      </div>
    </div>

    {/* Discussions */}
    <div className="flex-1 pl-4">
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-3 w-full ml-35">
          <svg width="30" height="30" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.33333 28H28V23.3333H9.33333V28ZM9.33333 21H37.3333V16.3333H9.33333V21ZM9.33333 14H37.3333V9.33333H9.33333V14ZM0 46.6667V4.66667C0 3.38333 0.457333 2.28511 1.372 1.372C2.28667 0.458889 3.38489 0.00155556 4.66667 0H42C43.2833 0 44.3823 0.457333 45.297 1.372C46.2117 2.28667 46.6682 3.38489 46.6667 4.66667V32.6667C46.6667 33.95 46.2101 35.049 45.297 35.9637C44.3839 36.8783 43.2849 37.3349 42 37.3333H9.33333L0 46.6667ZM7.35 32.6667H42V4.66667H4.66667V35.2917L7.35 32.6667Z" fill="white"/>
          </svg>
          <p className="text-4xl font-medium">Discussions</p>
        </div>
        <p className="text-5xl font-bold my-2">0</p>
        <p className="text-sm text-white/70">total posted</p>
      </div>
    </div>
  </div>
</div>

{/* Things to Do */}
<h2 className="text-3xl font-semibold mb-4 text-white font-Roboto">Things to do:-</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/90 mb-10">
  <div className="flex items-start space-x-4 text-xl font-Roboto">
    {/* Upload Dataset SVG */}
    <svg width="80" height="80" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.8333 34.6667V17.0084L18.2 22.6417L15.1667 19.5L26 8.66669L36.8333 19.5L33.8 22.6417L28.1667 17.0084V34.6667H23.8333ZM13 43.3334C11.8083 43.3334 10.7886 42.9094 9.94067 42.0615C9.09278 41.2136 8.66812 40.1931 8.66667 39V32.5H13V39H39V32.5H43.3333V39C43.3333 40.1917 42.9094 41.2122 42.0615 42.0615C41.2136 42.9109 40.1931 43.3348 39 43.3334H13Z" fill="white"/>
</svg>
    <p>
      <strong>Upload your dataset</strong> and empower others to build impactful medical models.
    </p>
  </div>

  <div className="flex items-start space-x-4 text-xl font-Roboto ml-7">
    {/* Conversation SVG */}
    <svg width="80" height="80" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 24C15.7956 24 16.5587 23.6839 17.1213 23.1213C17.6839 22.5587 18 21.7956 18 21C18 20.2044 17.6839 19.4413 17.1213 18.8787C16.5587 18.3161 15.7956 18 15 18C14.2044 18 13.4413 18.3161 12.8787 18.8787C12.3161 19.4413 12 20.2044 12 21C12 21.7956 12.3161 22.5587 12.8787 23.1213C13.4413 23.6839 14.2044 24 15 24ZM27 21C27 21.7956 26.6839 22.5587 26.1213 23.1213C25.5587 23.6839 24.7956 24 24 24C23.2044 24 22.4413 23.6839 21.8787 23.1213C21.3161 22.5587 21 21.7956 21 21C21 20.2044 21.3161 19.4413 21.8787 18.8787C22.4413 18.3161 23.2044 18 24 18C24.7956 18 25.5587 18.3161 26.1213 18.8787C26.6839 19.4413 27 20.2044 27 21ZM33 24C33.7956 24 34.5587 23.6839 35.1213 23.1213C35.6839 22.5587 36 21.7956 36 21C36 20.2044 35.6839 19.4413 35.1213 18.8787C34.5587 18.3161 33.7956 18 33 18C32.2044 18 31.4413 18.3161 30.8787 18.8787C30.3161 19.4413 30 20.2044 30 21C30 21.7956 30.3161 22.5587 30.8787 23.1213C31.4413 23.6839 32.2044 24 33 24Z" fill="white"/>
<path d="M48 3H0V39H10.758L18 46.242L25.242 39H48V3ZM6 33V9H42V33H22.758L18 37.758L13.242 33H6Z" fill="white"/>
</svg>

    <p>
      <strong>Be part of the conversation</strong>—collaborate, share, and build impactful models together.
    </p>
  </div>

  <div className="flex items-start space-x-4 text-xl font-Roboto">
    {/* Label Data SVG */}
    <svg width="80" height="80" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28 4.66669C15.1667 4.66669 4.66669 15.1667 4.66669 28C4.66669 40.8334 15.1667 51.3334 28 51.3334C40.8334 51.3334 51.3334 40.8334 51.3334 28C51.3334 15.1667 40.8334 4.66669 28 4.66669ZM23.3334 39.6667L11.6667 28L14.9567 24.71L23.3334 33.0634L41.0434 15.3534L44.3334 18.6667L23.3334 39.6667Z" fill="white"/>
</svg>

    <p>
      <strong>Boost credibility—</strong>get your data reviewed by professionals!
    </p>
  </div>
</div>


    {/* Activity Feed */}
    <div className="border border-white/20 rounded-lg p-8 space-y-6">
      {activities.map((activity, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between bg-[#1A1A38] border border-white/10 rounded-lg px-6 py-4"
        >
          <div className="flex items-center space-x-5">
            <div className="w-12 h-12 bg-white/20 rounded-full" />
            <div className="text-base leading-tight">
              <p className="font-semibold text-white">Dr Priya Sharma</p>
              <p className="text-white/80 text-sm">{activity.action}</p>
            </div>
          </div>
          <button className="bg-white text-[#0A0C2C] font-semibold px-5 py-2 rounded-md text-base hover:bg-gray-200 transition">
            Explore
          </button>
        </div>
      ))}
    </div>
  </div>
</div>

  </div>
);
}