import React from 'react'
import Search from "./components/Search"
import DatasetComp from "./components/DatasetComp.jsx";
import DiscussionThreadCard from './components/DiscussionThreadCard.jsx';



export default function YourWork(){
    return(
        <div className="relative bg-[#1A1A38] bg-auto  min-h-screen h-full w-full flex justify-start items-start flex-col overflow-y-scroll ">
              <svg className="relative left-360 top-2"  xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="30" fill="#D9D9D9"/>
        </svg>
        <div className="absolute flex flex-col justify-start justify-items-start space-y-8 pl-5 pt-5">
        { /*hambuger Three lines */}
        <svg className="pt-2"  xmlns="http://www.w3.org/2000/svg" width="48" height="29" viewBox="0 0 48 29" fill="none">
  <line y1="2.5" x2="48" y2="2.5" stroke="white" stroke-width="5"/>
  <line y1="14.5" x2="48" y2="14.5" stroke="white" stroke-width="5"/>
  <line y1="26.5" x2="48" y2="26.5" stroke="white" stroke-width="5"/>
</svg>
<div className="relative">
{/* circle */}
<svg classname="absolute z-0 top-10 left-5"   xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="40" fill="white"/>
</svg>
{/* plus */}
<svg className="absolute z-10 top-0 left-0"  xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 76 76" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 15.8333C28.5 14.1536 29.1673 12.5427 30.355 11.355C31.5427 10.1673 33.1536 9.5 34.8333 9.5H41.1667C42.8464 9.5 44.4573 10.1673 45.645 11.355C46.8327 12.5427 47.5 14.1536 47.5 15.8333V28.5H60.1667C61.8464 28.5 63.4573 29.1673 64.645 30.355C65.8327 31.5427 66.5 33.1536 66.5 34.8333V41.1667C66.5 42.8464 65.8327 44.4573 64.645 45.645C63.4573 46.8327 61.8464 47.5 60.1667 47.5H47.5V60.1667C47.5 61.8464 46.8327 63.4573 45.645 64.645C44.4573 65.8327 42.8464 66.5 41.1667 66.5H34.8333C33.1536 66.5 31.5427 65.8327 30.355 64.645C29.1673 63.4573 28.5 61.8464 28.5 60.1667V47.5H15.8333C14.1536 47.5 12.5427 46.8327 11.355 45.645C10.1673 44.4573 9.5 42.8464 9.5 41.1667V34.8333C9.5 33.1536 10.1673 31.5427 11.355 30.355C12.5427 29.1673 14.1536 28.5 15.8333 28.5H28.5V15.8333Z" fill="#FFB74D"/>
</svg>
</div>
{/* home */}
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 76 76" fill="none">
  <path d="M17.0051 63.3333C15.8377 63.3333 14.8433 62.9248 14.0221 62.1078C13.1988 61.2908 12.7871 60.2986 12.7871 59.1312V53.6623L23.9971 43.7V63.3333H17.0051ZM26.6729 63.3333V52.1297H49.3273V63.3333H26.6729ZM52.0063 63.3333V40.3212L39.9318 29.659L48.4153 22.1603L61.8103 34.0163C62.2578 34.4512 62.603 34.9368 62.8458 35.473C63.0907 36.0113 63.2131 36.5845 63.2131 37.1925V59.1153C63.2131 60.2828 62.8046 61.2782 61.9876 62.1015C61.1706 62.9248 60.1784 63.3354 59.0109 63.3333H52.0063ZM12.7903 49.9953V37.2337C12.7903 36.6278 12.9117 36.0462 13.1544 35.4888C13.3972 34.9315 13.7424 34.4407 14.1899 34.0163L35.2008 15.3963C35.623 15.0142 36.0706 14.7408 36.5434 14.5762C37.0184 14.4115 37.5051 14.3292 38.0033 14.3292C38.5015 14.3292 38.9871 14.4115 39.4599 14.5762C39.9328 14.7408 40.3804 15.0142 40.8026 15.3963L46.4044 20.406L12.7903 49.9953Z" fill="#A1A1AA"/>
</svg>
{/* dataset */}
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 76 76" fill="none">
  <path d="M9.5 66.5V9.5H66.5V66.5H9.5ZM15.8333 60.1667H60.1667V15.8333H15.8333V60.1667ZM22.1667 34.8333H34.8333V22.1667H22.1667V34.8333ZM41.1667 34.8333H53.8333V22.1667H41.1667V34.8333ZM22.1667 53.8333H34.8333V41.1667H22.1667V53.8333ZM41.1667 53.8333H53.8333V41.1667H41.1667V53.8333Z" fill="#A1A1AA"/>
</svg>
{/* discussions */}
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 76 76" fill="none">
  <path d="M19.0002 44.3333H44.3335V38H19.0002V44.3333ZM19.0002 34.8333H57.0002V28.5H19.0002V34.8333ZM19.0002 25.3333H57.0002V19H19.0002V25.3333ZM6.3335 69.6667V12.6667C6.3335 10.925 6.95416 9.43457 8.1955 8.19534C9.43683 6.95612 10.9273 6.33545 12.6668 6.33334H63.3335C65.0752 6.33334 66.5667 6.95401 67.808 8.19534C69.0493 9.43668 69.6689 10.9271 69.6668 12.6667V50.6667C69.6668 52.4083 69.0472 53.8998 67.808 55.1412C66.5688 56.3825 65.0773 57.0021 63.3335 57H19.0002L6.3335 69.6667ZM16.3085 50.6667H63.3335V12.6667H12.6668V54.2292L16.3085 50.6667Z" fill="#A1A1AA"/>
</svg>
{/* your work */}
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 88 88" fill="none">
  <path d="M38.8667 58.85L64.7167 33L59.5833 27.8666L38.8667 48.5833L28.4167 38.1333L23.2833 43.2666L38.8667 58.85ZM18.3333 77C16.3167 77 14.5909 76.2825 13.156 74.8476C11.7211 73.4127 11.0024 71.6857 11 69.6666V18.3333C11 16.3166 11.7187 14.5908 13.156 13.156C14.5933 11.7211 16.3191 11.0024 18.3333 11H33.7333C34.5278 8.79996 35.8576 7.02774 37.7227 5.68329C39.5878 4.33885 41.6802 3.66663 44 3.66663C46.3198 3.66663 48.4134 4.33885 50.281 5.68329C52.1486 7.02774 53.4771 8.79996 54.2667 11H69.6667C71.6833 11 73.4103 11.7186 74.8477 13.156C76.285 14.5933 77.0024 16.3191 77 18.3333V69.6666C77 71.6833 76.2826 73.4103 74.8477 74.8476C73.4128 76.285 71.6858 77.0024 69.6667 77H18.3333ZM44 15.5833C44.7944 15.5833 45.452 15.323 45.9727 14.8023C46.4933 14.2816 46.7524 13.6253 46.75 12.8333C46.7476 12.0413 46.4872 11.385 45.969 10.8643C45.4508 10.3436 44.7944 10.0833 44 10.0833C43.2056 10.0833 42.5492 10.3436 42.031 10.8643C41.5128 11.385 41.2524 12.0413 41.25 12.8333C41.2476 13.6253 41.5079 14.2828 42.031 14.806C42.5541 15.3291 43.2104 15.5882 44 15.5833Z" fill="white"/>
</svg>
        </div>
        <div className="flex justify-center items-start absolute top-2 left-50">
<Search />
</div>

<div className="relative flex flex-row gap-5">
<svg className="absolute top-10 left-35" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
  <path d="M13.125 28.125H50.625C51.1223 28.125 51.5992 28.3225 51.9508 28.6742C52.3025 29.0258 52.5 29.5027 52.5 30C52.5 30.4973 52.3025 30.9742 51.9508 31.3258C51.5992 31.6775 51.1223 31.875 50.625 31.875H13.125C12.6277 31.875 12.1508 31.6775 11.7992 31.3258C11.4475 30.9742 11.25 30.4973 11.25 30C11.25 29.5027 11.4475 29.0258 11.7992 28.6742C12.1508 28.3225 12.6277 28.125 13.125 28.125Z" fill="white"/>
  <path d="M13.9012 30L29.4524 45.5475C29.8045 45.8996 30.0023 46.3771 30.0023 46.875C30.0023 47.3729 29.8045 47.8504 29.4524 48.2025C29.1004 48.5546 28.6228 48.7524 28.1249 48.7524C27.627 48.7524 27.1495 48.5546 26.7974 48.2025L9.92243 31.3275C9.74782 31.1533 9.60929 30.9464 9.51476 30.7186C9.42024 30.4908 9.37158 30.2466 9.37158 30C9.37158 29.7534 9.42024 29.5092 9.51476 29.2814C9.60929 29.0536 9.74782 28.8467 9.92243 28.6725L26.7974 11.7975C27.1495 11.4454 27.627 11.2476 28.1249 11.2476C28.6228 11.2476 29.1004 11.4454 29.4524 11.7975C29.8045 12.1496 30.0023 12.6271 30.0023 13.125C30.0023 13.6229 29.8045 14.1004 29.4524 14.4525L13.9012 30Z" fill="white"/>
</svg>
<h3 className="absolute top-5 z-50 left-55 font-roboto text-[64px] font-semibold text-white tracking-normal whitespace-nowrap">
  Your Work 
</h3>
</div>
<h6 className="absolute top-40  left-56 font-roboto text-[28px] font-normal text-[#D9D9D9] tracking-normal">This is a private view of your content</h6>
<div className="absolute top-50 left-55 font-roboto text-[48px] font-semibold text-white tracking-wide">Datasets</div>

<div className="flex absolute top-70 left-55  flex-row gap-5 overflow-x-auto w-[1200px] ">
  {[...Array(5)].map((_, i) => (
    <DatasetComp key={i} />
  ))}
</div>

<div className="absolute top-[600px] left-55 font-roboto text-[48px] font-semibold text-white tracking-wide">Verified Datasets</div>
<div className="flex absolute top-[680px] left-55  flex-row gap-5 overflow-x-auto w-[1200px] ">
  {[...Array(3)].map((_, i) => (
    <DatasetComp key={i} />
  ))}
</div>
<div className="absolute top-[1000px] left-55 font-roboto text-[48px] font-semibold text-white tracking-wide">Discusssions</div>
<div className="flex absolute top-[1100px] left-55  flex-col gap-5 overflow-x-auto w-[1200px] ">
  {[...Array(3)].map((_, i) => (
    <DiscussionThreadCard key={i} />
  ))}
</div>

</div>
    );

}
