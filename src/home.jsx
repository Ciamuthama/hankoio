/* eslint-disable no-undef */
import React from "react";
import { Images } from "./images";

export default function Home() {
  const [toggle, setToggle] = React.useState(true);
  const [time, setTime] = React.useState(new Date());
  const [battery, setBattery] = React.useState();

  const handleDismiss = () => {
    setToggle(!toggle);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      const level = Math.abs(battery.level * 100);
      setBattery(level);
    });
  }

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

  const currentTime = time.toLocaleDateString("en-US", format);

  return (
    <div className="flex justify-between flex-col h-full mb-auto">
      <div className="lg:bg-neutral-400/50 md:bg-none max-sm:bg-none flex justify-between items-center flex-row font-sans">
        <div className="md:hidden max-sm:hidden lg:flex flex-row justify-between items-center gap-2 mx-3 py-1">
          <div className="md:hidden max-sm:hidden lg:block flex items-center">
            <img src={Images.apple} height="15px" width="15px" />
          </div>
          <p className="font-sans text-xs font-semibold text-white">Finder</p>
          <p className="font-sans text-xs font-medium text-white">File</p>
          <p className="font-sans text-xs font-medium text-white">Edit</p>
          <p className="font-sans text-xs font-medium text-white ">View</p>
          <p className="font-sans text-xs font-medium text-white">Windows</p>
          <p className="font-sans text-xs font-medium text-white">Help</p>
        </div>
        <div className="flex flex-row md:flex-row-reverse max-sm:flex-row-reverse justify-between gap-2 mx-3 lg:w-auto md:w-full max-sm:w-full">
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
          <p className="text-xs lg:text-end md:float-left font-medium font-sans text-white">
            {" "}
            {currentTime}{" "}
          </p>
        </div>
      </div>

      {toggle && (
        <div
          className={`flex flex-col transition-transform transform scale-100 lg:bg-neutral-900 p-1 lg:gap-4  max-sm:gap-6 mx-auto lg:w-2/5 md:w-2/3 max-sm:w-auto max-sm:h-4/5 rounded `}
        >
          <div className="flex flex-row mb-3 gap-2">
            <div className="lg:flex flex-row gap-2 bg-neutral-600 w-full p-1 py-2 rounded-md md:hidden  max-sm:hidden">
              <div
                className={` w-4 h-4 bg-red-600 rounded-full transition-transform  transform ${
                  toggle ? "scale-80" : "scale-100"
                } `}
                onClick={handleDismiss}
              ></div>
              <div className=" w-4 h-4 bg-orange-300 rounded-full"></div>
              <div className="w-4 h-4  bg-green-600 rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-row mx-auto items-center justify-center ">
            <div className="bg-neutral-800 w-3 h-full rounded-md lg:block max-sm:hidden md:hidden">
              <div className="bg-neutral-600 w-3 h-1/4 rounded-md"></div>
            </div>

            <div className="flex flex-col p-2 ">
              <div className="flex items-center justify-center pb-2">
                <p className="font-medium text-white font-sans text-sm text-center relative -top-16 lg:block max-sm:hidden md:hidden">
                  Application
                </p>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-center mx-auto lg:gap-4 md:gap-8 max-sm:gap-8 cursor-pointer">
                <div className="lg:block md:hidden max-sm:hidden">
                  <img src={Images.Blocker} alt="" className="w-16 h-16" />
                </div>
                <div className="lg:block md:hidden max-sm:hidden">
                  <img
                    src={Images.AndroidStudio}
                    alt=""
                    className="w-16 h-16"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={Images.AppleTv}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    AppleTv
                  </p>
                </div>
                <div className="flex flex-col items-centerx">
                  <img
                    src={Images.Arc}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    Arc
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={Images.Alva}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    Alva
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={Images.Bloody}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    Bloody7
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={Images.blyOS}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    blyOS
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={Images.Calculator}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    Calculator
                  </p>
                </div>
                <div className="flex">
                  <img
                    src={Images.Chrome}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    Chrome
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={Images.Contact}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    Contacts
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={Images.Discord}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    Discord
                  </p>
                </div>
                <div className="lg:block md:hidden max-sm:hidden ">
                  <img src={Images.Docker} alt="" className="w-16 h-16" />
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={Images.Earth}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    Earth
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={Images.FaceTime}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    FaceTime
                  </p>
                </div>
                <div className="lg:block md:hidden max-sm:hidden ">
                  <img src={Images.FanControl} alt="" className="w-16 h-16" />
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={Images.GitHub}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    GitHub
                  </p>
                </div>
                <div className="lg:block md:hidden max-sm:hidden ">
                  <img src={Images.Idena} alt="" className="w-16 h-16" />
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={Images.Instagram}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    Instagram
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={Images.Keep}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    Keep
                  </p>
                </div>
                <div className="lg:block md:hidden max-sm:hidden ">
                  <img src={Images.LanScan} alt="" className="w-16 h-16" />
                </div>
                <div className="lg:block md:hidden max-sm:hidden">
                  <img src={Images.Node} alt="" className="w-16 h-16" />
                </div>
                <div className="lg:hidden flex flex-col items-center">
                  <img
                    src={Images.Phone}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    Phone
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={Images.Podcasts}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    Podcast
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={Images.Spotify}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    Spotify
                  </p>
                </div>
                <div className="lg:block md:hidden max-sm:hidden ">
                  <img src={Images.Sublime} alt="" className="w-16 h-16" />
                </div>
                <div className="lg:block md:hidden max-sm:hidden">
                  <img src={Images.Steam} alt="" className="w-16 h-16" />
                </div>
                <div className="lg:block md:hidden max-sm:hidden ">
                  <img src={Images.WebTorrent} alt="" className="w-16 h-16" />
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={Images.Word}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    Word
                  </p>
                </div>
                <div className="lg:block md:hidden max-sm:hidden">
                  <img src={Images.XBox} alt="" className="w-16 h-16" />
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={Images.Netflix}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    Netflix
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={Images.YouTube}
                    alt=""
                    className="w-16 h-16 max-sm:w-14 max-sm:h-14"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center mt-4">
                    Youtube
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center flex-row mx-auto my-4 cursor-pointer bg-neutral-100/40 rounded-xl shadow-[0_0_10px_2px_rgba(67,67,67,0.3)] ">
        <div className="lg:block md:hidden  max-sm:hidden">
          <img
            src={Images.Finder}
            alt=""
            className="w-16 h-16 max-sm:w-14 max-sm:h-14"
          />
        </div>
        <div onClick={() => setToggle(true)}>
          <img
            src={Images.AppStore}
            alt=""
            className="w-16 h-16 max-sm:w-14 max-sm:h-14"
          />
        </div>
        <div>
          <img
            src={Images.Message}
            alt=""
            className="w-16 h-16 max-sm:w-14 max-sm:h-14"
          />
        </div>
        <div className=" max-sm:hidden">
          <img
            src={Images.Telegram}
            alt=""
            className="w-16 h-16 max-sm:w-14 max-sm:h-14"
          />
        </div>
        <div>
          <img
            src={Images.Gmail}
            alt=""
            className="w-16 h-16 max-sm:w-14 max-sm:h-14"
          />
        </div>
        <div>
          <img
            src={Images.Safari}
            alt=""
            className="w-16 h-16 max-sm:w-14 max-sm:h-14"
          />
        </div>
        <div className=" max-sm:hidden">
          <img
            src={Images.Calendar}
            alt=""
            className="ww-16 h-16 max-sm:w-14 max-sm:h-14"
          />
        </div>
        <div>
          <img
            src={Images.Music}
            alt=""
            className="w-16 h-16 max-sm:w-14 max-sm:h-14"
          />
        </div>
        <div>
          <img
            src={Images.WhatApp}
            alt=""
            className="w-16 h-16 max-sm:w-14 max-sm:h-14"
          />
        </div>
        <div className="lg:block md:hidden  max-sm:hidden ">
          <img
            src={Images.VScode}
            alt=""
            className="w-16 h-16 max-sm:w-14 max-sm:h-14"
          />
        </div>
        <div className="lg:block md:hidden  max-sm:hidden">
          <img
            src={Images.Terminal}
            alt=""
            className="w-16 h-16 max-sm:w-14 max-sm:h-14"
          />
        </div>
        <div className="lg:block md:hidden  max-sm:hidden ">
          <img
            src={Images.JetBrains}
            alt=""
            className="w-16 h-16 max-sm:w-14 max-sm:h-14"
          />
        </div>
        <div className="lg:block md:hidden  max-sm:hidden bg-center bg-contain w-0.5 h-12 bg-neutral-200 rounded mx-2"></div>
        <div className="lg:block md:hidden  max-sm:hidden">
          <img
            src={Images.Folder}
            alt=""
            className="w-16 h-16 max-sm:w-14 max-sm:h-14"
          />
        </div>
        <div className="lg:block md:hidden  max-sm:hidden ">
          <img
            src={Images.Trash}
            alt=""
            className="w-16 h-16 max-sm:w-14 max-sm:h-14"
          />
        </div>
      </div>
    </div>
  );
}
