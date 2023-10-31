import React from "react";
import Popup from "reactjs-popup";
import { Images } from "./images";
import DateComponent from "./DateComponent";
import ModalComponent from "./Modal";
import FalseComponent from "./falseComponent";
import SettingPage from "./SettingPage";


export default function Home() {
  const [toggle, setToggle] = React.useState(false);
  const [time, setTime] = React.useState(new Date());
  const [battery, setBattery] = React.useState();
  const [isOpen, setIsOpen] = React.useState(true);
  const [isOpenFalse, setIsOpenFalse] = React.useState(false);

  const closeModal = () => setIsOpen(false);
  const openModalFalse = () => setIsOpenFalse(true);

  const handleOpen = () => {
    setToggle(true);
  };

  const handleClose = () => {
    setToggle(false)
  }
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(()=>{
    if ("getBattery" in navigator) {
      navigator.getBattery().then((battery) => {
        const level = Math.abs(battery.level * 100);
        setBattery(level);
      });
    }
  },[])
  
  //   if('connection' in navigator){
  //     const wfi = navigator.connection
  //     console.log(wfi)
  //   }

  const format = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const FormatMobile = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }
 
const currentTime = time.toLocaleDateString("en-US", format);
const TimeMobile = time.toLocaleTimeString('en-US', FormatMobile)

  return (
    <div className="flex justify-between flex-col h-full mb-auto">
      <div className="lg:bg-neutral-400/50 md:bg-none max-sm:bg-none flex justify-between items-center flex-row font-sans">
        <div className="md:hidden max-sm:hidden lg:flex flex-row justify-between items-center gap-2 mx-3 py-1">
          <div className="md:hidden max-sm:hidden lg:block flex items-center" onClick={handleOpen}>
            <img src={Images.apple} height="15px" width="15px" />
          </div>
          <p className="font-sans text-xs font-semibold text-white">Finder</p>
          <p className="font-sans text-xs font-medium text-white">File</p>
          <p className="font-sans text-xs font-medium text-white">Edit</p>
          <p className="font-sans text-xs font-medium text-white ">View</p>
          <p className="font-sans text-xs font-medium text-white">Windows</p>
          <p className="font-sans text-xs font-medium text-white">Help</p>
        </div>
        <div className="flex flex-row md:flex-row-reverse max-sm:flex-row-reverse justify-between gap-2 mx-3 lg:w-auto md:w-full max-sm:w-full select-none">
          <div className="flex-row flex gap-2">
            <p className="font-sans text-xs  max-md:text-end ">
              <img src={Images.wifi} alt="" width="15px" height="15px" />
            </p>
            <p className="text-xs font-medium md:text-end font-sans text-white flex items-center">
              {battery}%{" "}
              <img
                src={Images.battery}
                width="16px"
                height="16px"
                className="ml-1"
              />
            </p>
          </div>
          <p className="text-xs lg:text-end md:float-left max-sm:hidden font-medium font-sans text-white">
            {" "}
            {currentTime}{" "}
          </p>
          <p className="text-xs lg:hidden max-sm:flex md:hidden font-medium font-sans text-white">
            {" "}
            {TimeMobile}{" "}
          </p>
        </div>
      </div>

    
        <Popup open={isOpen}  onClose={closeModal} className="bg-neutral-400">
         <div className='w-full mx-auto' >
           <DateComponent/>
         </div> 
        <div
          className={"flex flex-col md:justify-between lg:bg-neutral-900 p-1 lg:gap-4  max-sm:gap-6 mx-auto lg:w-3/5 md:w-2/3 max-sm:w-auto
          max-sm:h-4/5 rounded lg:shadow-[0_0_10px_3px_rgba(67,67,67,0.4)]  "}
        >
          <div className="flex flex-row mb-3">
            <div className="lg:flex flex-row gap-2 bg-neutral-600 w-full p-1 py-2 rounded-md md:hidden  max-sm:hidden ">
              <div
                className=" w-4 h-4 bg-red-600 rounded-full cursor-pointer"
                  
                onClick={closeModal}
              ></div>
              <div className=" w-4 h-4 bg-orange-300 rounded-full cursor-not-allowed"></div>
              <div className="w-4 h-4  bg-green-600 rounded-full cursor-not-allowed"></div>
            </div>
          </div>

          
          <ModalComponent openModalFalse={ openModalFalse } />
         </div>
        </Popup>
      <Popup open={isOpenFalse} onClose={() => setIsOpenFalse(false)} >
        <div className=" flex-col gap-2 bg-slate-300 flex justify-center p-2 rounded-md shadow-[0_0_10px_2px_rgba(67,67,67,0.4)] ">
          <div className="flex flex-row gap-2 ">
            <div
                className=" w-4 h-4 bg-red-600 rounded-full cursor-pointer"
                onClick={()=>setIsOpenFalse(false)}
              ></div>
              <div className=" w-4 h-4 bg-orange-300 rounded-full cursor-not-allowed"></div>
              <div className="w-4 h-4  bg-green-600 rounded-full cursor-not-allowed"></div></div>
        <FalseComponent/>
        </div>
      </Popup>

      <Popup open={toggle} onClose={handleClose} onOpen={handleOpen}>
      <div className=" flex-col gap-2 bg-slate-300  flex justify-center p-2 rounded-md shadow-[0_0_10px_2px_rgba(67,67,67,0.4)] ">
          <div className="flex flex-row gap-2 ">
            <div
                className=" w-4 h-4 bg-red-600 rounded-full cursor-pointer"
                onClick={handleClose}
              ></div>
              <div className=" w-4 h-4 bg-orange-300 rounded-full cursor-not-allowed"></div>
              <div className="w-4 h-4  bg-green-600 rounded-full cursor-not-allowed"></div></div>
          <SettingPage />
          </div>
      </Popup>

      <div className="flex justify-center items-center flex-row mx-auto my-4 select-none cursor-pointer bg-neutral-100/40 rounded-xl shadow-[0_0_10px_2px_rgba(67,67,67,0.3)] ">
        <div className="lg:block md:hidden  max-sm:hidden"  onClick={openModalFalse}>
          <img
            src={Images.Finder}
            alt=""
            className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
          />
        </div>
        <div onClick={()=> setIsOpen(true)}>
          <img
            src={Images.AppStore}
            alt=""
            className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
          />
        </div>
        <div onClick={openModalFalse}>
          <img
            src={Images.Message}
            alt=""
            className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
          />
        </div>
        <div className="max-sm:hidden" onClick={openModalFalse}>
          <img
            src={Images.Gmail}
            alt=""
            className=" w-20 h-20 "
          />
        </div>
        <div onClick={openModalFalse}>
          <img
            src={Images.Safari}
            alt=""
            className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
          />
        </div>
        <div className=" max-sm:hidden" onClick={openModalFalse}>
          <img
            src={Images.Calendar}
            alt=""
            className="w w-20 h-20 max-sm:w-16 max-sm:h-16"
          />
        </div>
        <div onClick={openModalFalse}>
          <img
            src={Images.Music}
            alt=""
            className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
          />
        </div>
        <div onClick={openModalFalse}>
          <img
            src={Images.WhatApp}
            alt=""
            className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
          />
        </div>
        <div className="lg:block md:hidden  max-sm:hidden " onClick={openModalFalse}>
          <img
            src={Images.VScode}
            alt=""
            className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
          />
        </div>
        <div className="lg:block md:hidden  max-sm:hidden" onClick={openModalFalse}>
          <img
            src={Images.Terminal}
            alt=""
            className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
          />
        </div>
        <div className="lg:block md:hidden  max-sm:hidden " onClick={openModalFalse}>
          <img
            src={Images.JetBrains}
            alt=""
            className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
          />
        </div>
        <div onClick={handleOpen}>
          <img
            src={Images.Settings}
            alt=""
            className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
          />
        </div>
        <div className="lg:block md:hidden  max-sm:hidden bg-center bg-contain w-0.5 h-12 bg-neutral-200 rounded mx-2"></div>
        <div className="lg:block md:hidden  max-sm:hidden" onClick={openModalFalse}>
          <img
            src={Images.Folder}
            alt=""
            className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
          />
        </div>
        <div className="lg:block md:hidden  max-sm:hidden " onClick={openModalFalse}>
          <img
            src={Images.Trash}
            alt=""
            className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
          />
        </div>
      </div>
    </div>
  );
}
