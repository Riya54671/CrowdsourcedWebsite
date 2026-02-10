import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { FiUpload } from "react-icons/fi"; 
import axios from 'axios';
import {useUser} from "./UserContext";

export default function DatasetDetails(){
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false); 
  const [filename, setFile] = useState(null);
  const [datasetName, setDatasetname] = useState('');
  const [shortDescription, setShortdescription] = useState('');
  const [Description, setDescription] = useState('');
  const [imageUrl, setImageurl] = useState('');
  const user = useUser(); 
  const username = user?.username;

  

  const handleFileChange = (e) => {
    const selectedfile = e.target.files[0];
    if (selectedfile && selectedfile.size > 1 * 1024 * 1024) { // 1MB size limit
      setShowAlert(true);
      setFile(null);
    } else {
      setShowAlert(false);
      setFile(selectedfile);
    }
  };
    return(
        <div className="relative bg-[#1A1A38]  min-h-screen h-full w-full flex justify-start items-start flex-col overflow-y-scroll ">

        <div className="absolute flex flex-col justify-start justify-items-start space-y-8 pl-5 pt-5">
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
<button >
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 78 78" fill="none">
  <path d="M34.45 52.1625L57.3625 29.25L52.8125 24.7L34.45 43.0625L25.1875 33.8L20.6375 38.35L34.45 52.1625ZM16.25 68.25C14.4625 68.25 12.9328 67.6141 11.661 66.3423C10.3892 65.0704 9.75217 63.5397 9.75 61.75V16.25C9.75 14.4625 10.387 12.9328 11.661 11.661C12.935 10.3892 14.4647 9.75217 16.25 9.75H29.9C30.6042 7.8 31.7828 6.22917 33.436 5.0375C35.0892 3.84583 36.9438 3.25 39 3.25C41.0562 3.25 42.9119 3.84583 44.5673 5.0375C46.2226 6.22917 47.4002 7.8 48.1 9.75H61.75C63.5375 9.75 65.0683 10.387 66.3423 11.661C67.6163 12.935 68.2522 14.4647 68.25 16.25V61.75C68.25 63.5375 67.6141 65.0683 66.3423 66.3423C65.0704 67.6163 63.5397 68.2522 61.75 68.25H16.25ZM39 13.8125C39.7042 13.8125 40.287 13.5818 40.7485 13.1203C41.21 12.6588 41.4397 12.077 41.4375 11.375C41.4353 10.673 41.2046 10.0913 40.7452 9.62975C40.2859 9.16825 39.7042 8.9375 39 8.9375C38.2958 8.9375 37.7141 9.16825 37.2548 9.62975C36.7954 10.0913 36.5647 10.673 36.5625 11.375C36.5603 12.077 36.7911 12.6598 37.2548 13.1235C37.7184 13.5872 38.3002 13.8168 39 13.8125Z" fill="#A1A1AA"/>
</svg>
</button>
        </div>
        <div className="flex relative">
            <div className="flex flex-col gap-y-5">
                <div className="flex absolute left-50 font-roboto text-[40px] font-semibold text-white tracking-normal space-x-4">
                    <span>Dataset</span><span>Name</span>
                    </div>
                    <input type="text" onChange={(e) => setDatasetname(e.target.value)} className="flex absolute left-50 top-15 w-[1200px] h-[50px] border-white border-2 rounded-[20px] font-roboto text-[32px] text-white font-normal " />
            </div>
            <div className="flex flex-col gap-y-5">
                <div className="flex absolute left-50 top-26 font-roboto text-[40px] font-semibold text-white tracking-normal whitespace-nowrap ">
                    Describe the dataset in one line
                    </div>
                    <input type="text" onChange={(e) => setShortdescription(e.target.value)} className="flex absolute left-50 top-42 w-[1200px] h-[50px] border-white border-2 rounded-[20px] font-roboto text-[32px] text-white font-normal " />
            </div>
            <div className="flex flex-col gap-y-5">
                <div className="flex absolute left-50 top-53  font-roboto text-[40px] font-semibold text-white tracking-normal whitespace-nowrap ">
                    Describe your Dataset
                    </div>
                    <textarea placeholder="Describe your dataset briefly " rows={10} cols={50} onChange={(e) => setDescription(e.target.value)} className="absolute top-70 left-50 w-[1200px] h-[200px] border-white border-2 rounded-[20px] font-roboto text-[28px] text-white font-normal bg-transparent px-4 py-2 resize-none" ></textarea>
            
                </div>
                <div className="flex flex-col gap-y-5">
                <div className="flex absolute left-50 top-120 font-roboto text-[40px] font-semibold text-white tracking-normal whitespace-nowrap ">
                    Image that describes your dataset
                    </div>
                    <input type="text" placeholder="Image url" onChange={(e) => setImageurl(e.target.value)} className="flex absolute left-50 top-136 w-[1200px] h-[60px] border-white border-2 rounded-[20px] font-roboto text-[32px] text-white font-normal " />
            </div>
        
        </div>
        <div className="absolute bottom-10 left-50">
  <label
    htmlFor="file-upload"
    className="flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-lg cursor-pointer hover:bg-orange-400 transition"
  >
    <FiUpload className="text-xl" />
    <span>Choose File</span>
  </label>
  <input
    id="file-upload"
    type="file"
    onChange={handleFileChange}
    className="hidden"
  />
  {filename && (
    <p className="mt-2 text-white">
      Selected file: {filename.name}
    </p>
  )}
</div>
<button  className="absolute top-160 left-280 w-[280px] h-[60px] left-50  text-black bg-white rounded- font-roboto text-[32px] font-normal whitespace-nowrap" onClick={() => {
  createDataset();
  navigate("/datasetPreview");
}}>Upload Dataset</button>



        </div>
    );
}