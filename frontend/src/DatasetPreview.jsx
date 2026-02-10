import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function DatasetPreview(){
  const navigate = useNavigate();
  const [datasets, setDatasets] = useState([]);

  


  
    return(
        <div className="bg-[#1A1A38]  min-h-screen w-full flex justify-start items-start overflow-y-scroll ">
        <div className="flex flex-col justify-start justify-items-start space-y-8 pl-5 pt-5">
        { /*hambuger Three lines */}
        <svg className="pt-2"  xmlns="http://www.w3.org/2000/svg" width="48" height="29" viewBox="0 0 48 29" fill="none">
  <line y1="2.5" x2="48" y2="2.5" stroke="white" stroke-width="5"/>
  <line y1="14.5" x2="48" y2="14.5" stroke="white" stroke-width="5"/>
  <line y1="26.5" x2="48" y2="26.5" stroke="white" stroke-width="5"/>
</svg>
<button>
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
</button  >
{/* home */}
<button onClick={()=>navigate("/dashboard")}>
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 76 76" fill="none">
  <path d="M17.0051 63.3333C15.8377 63.3333 14.8433 62.9248 14.0221 62.1078C13.1988 61.2908 12.7871 60.2986 12.7871 59.1312V53.6623L23.9971 43.7V63.3333H17.0051ZM26.6729 63.3333V52.1297H49.3273V63.3333H26.6729ZM52.0063 63.3333V40.3212L39.9318 29.659L48.4153 22.1603L61.8103 34.0163C62.2578 34.4512 62.603 34.9368 62.8458 35.473C63.0907 36.0113 63.2131 36.5845 63.2131 37.1925V59.1153C63.2131 60.2828 62.8046 61.2782 61.9876 62.1015C61.1706 62.9248 60.1784 63.3354 59.0109 63.3333H52.0063ZM12.7903 49.9953V37.2337C12.7903 36.6278 12.9117 36.0462 13.1544 35.4888C13.3972 34.9315 13.7424 34.4407 14.1899 34.0163L35.2008 15.3963C35.623 15.0142 36.0706 14.7408 36.5434 14.5762C37.0184 14.4115 37.5051 14.3292 38.0033 14.3292C38.5015 14.3292 38.9871 14.4115 39.4599 14.5762C39.9328 14.7408 40.3804 15.0142 40.8026 15.3963L46.4044 20.406L12.7903 49.9953Z" fill="#A1A1AA"/>
</svg>
</button>
{/* dataset */}
<button>
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 88 88" fill="none">
  <path d="M11 77V11H77V77H11ZM18.3333 69.6667H69.6667V18.3333H18.3333V69.6667ZM25.6667 40.3333H40.3333V25.6667H25.6667V40.3333ZM47.6667 40.3333H62.3333V25.6667H47.6667V40.3333ZM25.6667 62.3333H40.3333V47.6667H25.6667V62.3333ZM47.6667 62.3333H62.3333V47.6667H47.6667V62.3333Z" fill="white"/>
</svg>
</button>
{/* discussions */}
<button onClick={()=>navigate("/discussions")}>
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 76 76" fill="none">
  <path d="M19.0002 44.3333H44.3335V38H19.0002V44.3333ZM19.0002 34.8333H57.0002V28.5H19.0002V34.8333ZM19.0002 25.3333H57.0002V19H19.0002V25.3333ZM6.3335 69.6667V12.6667C6.3335 10.925 6.95416 9.43457 8.1955 8.19534C9.43683 6.95612 10.9273 6.33545 12.6668 6.33334H63.3335C65.0752 6.33334 66.5667 6.95401 67.808 8.19534C69.0493 9.43668 69.6689 10.9271 69.6668 12.6667V50.6667C69.6668 52.4083 69.0472 53.8998 67.808 55.1412C66.5688 56.3825 65.0773 57.0021 63.3335 57H19.0002L6.3335 69.6667ZM16.3085 50.6667H63.3335V12.6667H12.6668V54.2292L16.3085 50.6667Z" fill="#A1A1AA"/>
</svg>
</button>
{/* your work */}
<button onClick={()=>navigate("/yourwork")}>
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 78 78" fill="none">
  <path d="M34.45 52.1625L57.3625 29.25L52.8125 24.7L34.45 43.0625L25.1875 33.8L20.6375 38.35L34.45 52.1625ZM16.25 68.25C14.4625 68.25 12.9328 67.6141 11.661 66.3423C10.3892 65.0704 9.75217 63.5397 9.75 61.75V16.25C9.75 14.4625 10.387 12.9328 11.661 11.661C12.935 10.3892 14.4647 9.75217 16.25 9.75H29.9C30.6042 7.8 31.7828 6.22917 33.436 5.0375C35.0892 3.84583 36.9438 3.25 39 3.25C41.0562 3.25 42.9119 3.84583 44.5673 5.0375C46.2226 6.22917 47.4002 7.8 48.1 9.75H61.75C63.5375 9.75 65.0683 10.387 66.3423 11.661C67.6163 12.935 68.2522 14.4647 68.25 16.25V61.75C68.25 63.5375 67.6141 65.0683 66.3423 66.3423C65.0704 67.6163 63.5397 68.2522 61.75 68.25H16.25ZM39 13.8125C39.7042 13.8125 40.287 13.5818 40.7485 13.1203C41.21 12.6588 41.4397 12.077 41.4375 11.375C41.4353 10.673 41.2046 10.0913 40.7452 9.62975C40.2859 9.16825 39.7042 8.9375 39 8.9375C38.2958 8.9375 37.7141 9.16825 37.2548 9.62975C36.7954 10.0913 36.5647 10.673 36.5625 11.375C36.5603 12.077 36.7911 12.6598 37.2548 13.1235C37.7184 13.5872 38.3002 13.8168 39 13.8125Z" fill="#A1A1AA"/>
</svg>
</button>
        </div>

        
<div className="relative flex flex-row gap-5 justify-start  ">
<svg className="absolute top-25 left-30" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
  <path d="M13.125 28.125H50.625C51.1223 28.125 51.5992 28.3225 51.9508 28.6742C52.3025 29.0258 52.5 29.5027 52.5 30C52.5 30.4973 52.3025 30.9742 51.9508 31.3258C51.5992 31.6775 51.1223 31.875 50.625 31.875H13.125C12.6277 31.875 12.1508 31.6775 11.7992 31.3258C11.4475 30.9742 11.25 30.4973 11.25 30C11.25 29.5027 11.4475 29.0258 11.7992 28.6742C12.1508 28.3225 12.6277 28.125 13.125 28.125Z" fill="white"/>
  <path d="M13.9012 30L29.4524 45.5475C29.8045 45.8996 30.0023 46.3771 30.0023 46.875C30.0023 47.3729 29.8045 47.8504 29.4524 48.2025C29.1004 48.5546 28.6228 48.7524 28.1249 48.7524C27.627 48.7524 27.1495 48.5546 26.7974 48.2025L9.92243 31.3275C9.74782 31.1533 9.60929 30.9464 9.51476 30.7186C9.42024 30.4908 9.37158 30.2466 9.37158 30C9.37158 29.7534 9.42024 29.5092 9.51476 29.2814C9.60929 29.0536 9.74782 28.8467 9.92243 28.6725L26.7974 11.7975C27.1495 11.4454 27.627 11.2476 28.1249 11.2476C28.6228 11.2476 29.1004 11.4454 29.4524 11.7975C29.8045 12.1496 30.0023 12.6271 30.0023 13.125C30.0023 13.6229 29.8045 14.1004 29.4524 14.4525L13.9012 30Z" fill="white"/>
</svg>

<h3 className="absolute top-20 z-50 left-50 font-roboto text-[64px] font-semibold text-white tracking-normal">
  {datasets.datasetName}
</h3>
</div>
<div className="relative flex flex-col gap-0">
  <div className="flex mt-42 ml-50 font-roboto text-[32px] font-normal text-white tracking-normal">{datasets.shortDescription}</div>
  <div className="flex  ml-50 font-roboto text-[32px] font-normal text-white tracking-normal">{datasets.user.userName}</div>
  <div className="w-[1100px] h-[2px] bg-[#A1A1AA] ml-50"></div>
  <div className="flex  ml-50 font-roboto text-[32px] font-normal text-white tracking-normal min-h-screen">{datasets.description}</div>
</div>


<div className="relative flex min-h-screen justify-center">
<div className="absolute bottom-0 left-110 transform -translate-x-3/2 flex w-[1050px] h-[200px] rounded-[40px] border-4 border-white justify-end items-end justify-center">
<svg className="absolute left-5 top-3" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <path d="M13.3332 66.6667C11.4998 66.6667 9.93095 66.0145 8.6265 64.71C7.32206 63.4056 6.66873 61.8356 6.6665 60V20C6.6665 18.1667 7.31984 16.5978 8.6265 15.2934C9.93317 13.9889 11.5021 13.3356 13.3332 13.3334H30.5832C31.4721 13.3334 32.3198 13.5 33.1265 13.8334C33.9332 14.1667 34.6409 14.6389 35.2498 15.25L39.9998 20H66.6665C68.4998 20 70.0698 20.6534 71.3765 21.96C72.6832 23.2667 73.3354 24.8356 73.3332 26.6667V60C73.3332 61.8334 72.6809 63.4034 71.3765 64.71C70.0721 66.0167 68.5021 66.6689 66.6665 66.6667H13.3332Z" fill="white"/>
</svg>
<h3 className="absolute top-3 left-30 font-roboto text-[48px] font-semibold text-white tracking-normal">
  {datasets.datasetName}
</h3>
<div className="absolute left-0 flex flex-row gap-x-5">
  <div className="flex left-0 top-10">
  <svg className="flex absolute left-10 bottom-5 " xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
  <path d="M27.0835 18.7501V7.29175L38.5418 18.7501M12.5002 4.16675C10.1877 4.16675 8.3335 6.02091 8.3335 8.33342V41.6668C8.3335 42.7718 8.77248 43.8316 9.55388 44.613C10.3353 45.3944 11.3951 45.8334 12.5002 45.8334H37.5002C38.6052 45.8334 39.665 45.3944 40.4464 44.613C41.2278 43.8316 41.6668 42.7718 41.6668 41.6668V16.6667L29.1668 4.16675H12.5002Z" fill="#D9D9D9"/>
</svg>
<div className="flex absolute left-25 bottom-4 font-roboto text-[36px] font-normal text-[#D9D9D9] gap-x-2">
  <span>{nooffiles} </span><span>{datasets.filename}</span>
</div>
</div>
<div className="flex absolute left-40 top-10">
<svg className="flex absolute bottom-14 left-25" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
  <path d="M41.4436 6.2522H8.33317C6.03525 6.2522 4.1665 8.12095 4.1665 10.4189V39.5855C4.1665 41.8834 6.03525 43.7522 8.33317 43.7522H41.4436C43.7415 43.7522 45.6103 41.8834 45.6103 39.5855V10.4168C45.608 9.31258 45.1683 8.25427 44.3873 7.47367C43.6063 6.69308 42.5478 6.25385 41.4436 6.2522ZM16.6665 39.5855H8.33317V16.6668H16.6665V39.5855ZM29.1665 39.5855H20.8332V16.6668H29.1665V39.5855ZM33.3332 39.5855V16.6668H41.4436L41.4457 39.5855H33.3332Z" fill="#D9D9D9"/>
</svg>
<div className="flex absolute bottom-14 left-40 font-roboto text-[36px] font-normal text-[#D9D9D9] gap-x-2">
  <span>{noofcolumns} </span><span>columns</span>
</div>
  </div>
</div>
<button className="absolute right-5 top-10">
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
  <path d="M50.0003 66.6667L29.167 45.8334L35.0003 39.7917L45.8337 50.6251V16.6667H54.167V50.6251L65.0003 39.7917L70.8337 45.8334L50.0003 66.6667ZM25.0003 83.3334C22.7087 83.3334 20.7475 82.5181 19.117 80.8876C17.4864 79.257 16.6698 77.2945 16.667 75.0001V62.5001H25.0003V75.0001H75.0003V62.5001H83.3337V75.0001C83.3337 77.2917 82.5184 79.2542 80.8878 80.8876C79.2573 82.5209 77.2948 83.3362 75.0003 83.3334H25.0003Z" fill="white"/>
</svg>
</button>

</div>
</div>

        </div>
    );
}