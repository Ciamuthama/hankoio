import { Images } from './images'

export default function ModalComponent({ openModalFalse }) {

  return (
    <>
     <div className="flex flex-row mx-auto items-center justify-center ">
            <div className="bg-neutral-800 w-3 h-full rounded-md lg:block max-sm:hidden md:hidden">
              <div className="bg-neutral-600 w-3 h-1/4 rounded-md"></div>
            </div>

            <div className="flex flex-col p-2 max-sm:gap-5 max-sm:justify-between">
              <div className="flex items-center justify-center pb-2">
                <p className="font-medium text-white font-sans text-sm text-center relative -top-16.5 lg:block max-sm:hidden md:hidden">
                  Application
                </p>
              </div>
              <div className="flex flex-row flex-wrap items-center max-sm:justify-center 
                mx-auto ml-5 mr-5  lg:gap-4 md:gap-8 max-sm:gap-8 cursor-pointer">
                <div className="lg:block md:hidden max-sm:hidden" onClick={openModalFalse}>
                  <img src={Images.Blocker} alt="" className=" w-20 h-20" />
                </div>
                <div className="lg:block md:hidden max-sm:hidden">
                  <img
                    src={Images.AndroidStudio}
                    alt=""
                    className=" w-20 h-20"
                  />
                </div>
                <div className="flex flex-col items-center" onClick={openModalFalse}>
                  <img
                    src={Images.AppleTv}
                    alt=""
                    className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    AppleTv
                  </p>
                </div>
                <div className="flex flex-col items-center max-sm:hidden" onClick={openModalFalse}>
                  <img
                    src={Images.Arc}
                    alt=""
                    className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    Arc
                  </p>
                </div>
                <div className="flex flex-col items-center max-sm:hidden" onClick={openModalFalse}>
                  <img
                    src={Images.Alva}
                    alt=""
                    className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    Alva
                  </p>
                </div>
                <div className="flex flex-col items-center max-sm:hidden" onClick={openModalFalse}>
                  <img
                    src={Images.Bloody}
                    alt=""
                    className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    Bloody7
                  </p>
                </div>
                <div className="flex flex-col items-center max-sm:hidden" onClick={openModalFalse}>
                  <img
                    src={Images.blyOS}
                    alt=""
                    className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    blyOS
                  </p>
                </div>
                <div className="flex flex-col items-center" onClick={openModalFalse}>
                  <img
                    src={Images.Calculator}
                    alt=""
                    className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    Calculator
                  </p>
                </div>
                <div className="flex flex-col items-center" onClick={openModalFalse}>
                  <img
                    src={Images.Chrome}
                    alt=""
                    className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    Chrome
                  </p>
                </div>
                
                <div className="flex flex-col items-center" onClick={openModalFalse}>
                  <img
                    src={Images.Contact}
                    alt=""
                    className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    Contacts
                  </p>
                </div>
                <div className="flex flex-col items-center" onClick={openModalFalse}>
                  <img
                    src={Images.Discord}
                    alt=""
                    className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    Discord
                  </p>
                </div>
                <div className="lg:block md:hidden max-sm:hidden " onClick={openModalFalse}>
                  <img src={Images.Docker} alt="" className=" w-20 h-20" />
                </div>
                <div className="flex flex-col items-center max-sm:hidden" onClick={openModalFalse}>
                  <img
                    src={Images.Earth}
                    alt=""
                    className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    Earth
                  </p>
                </div>
                <div className="flex flex-col items-center" onClick={openModalFalse}>
                  <img
                    src={Images.FaceTime}
                    alt=""
                    className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    FaceTime
                  </p>
                </div>
                <div className="lg:block md:hidden max-sm:hidden " onClick={openModalFalse}>
                  <img src={Images.FanControl} alt="" className=" w-20 h-20" />
                </div>
                <div className="flex flex-col items-center" onClick={openModalFalse}>
                  <img
                    src={Images.GitHub}
                    alt=""
                    className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    GitHub
                  </p>
                </div>
                <div className="lg:block md:hidden max-sm:hidden " onClick={openModalFalse}>
                  <img src={Images.Idena} alt="" className=" w-20 h-20" />
                </div>
                <div className="flex flex-col items-center" onClick={openModalFalse}>
                  <img
                    src={Images.Instagram}
                    alt=""
                    className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    Instagram
                  </p>
                </div>
                <div className="flex flex-col items-center max-sm:hidden" onClick={openModalFalse}>
                  <img
                    src={Images.Keep}
                    alt=""
                    className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    Keep
                  </p>
                </div>
                <div className="lg:block md:hidden max-sm:hidden " onClick={openModalFalse}>
                  <img src={Images.LanScan} alt="" className=" w-20 h-20" />
                </div>
                <div className="lg:block md:hidden max-sm:hidden" onClick={openModalFalse}>
                  <img src={Images.Node} alt="" className=" w-20 h-20" />
                </div>
                <div className="lg:hidden flex flex-col items-center" onClick={openModalFalse}>
                  <img
                    src={Images.Phone}
                    alt=""
                    className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    Phone
                  </p>
                </div>
                <div className="flex flex-col items-center max-sm:hidden" onClick={openModalFalse}>
                  <img
                    src={Images.Podcasts}
                    alt=""
                    className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    Podcast
                  </p>
                </div>
                <div className="flex flex-col items-center" onClick={openModalFalse}>
                  <img
                    src={Images.Spotify}
                    alt=""
                    className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    Spotify
                  </p>
                </div>
                <div className="lg:block md:hidden max-sm:hidden " onClick={openModalFalse}>
                  <img src={Images.Sublime} alt="" className=" w-20 h-20" />
                </div>
                <div className="lg:block md:hidden max-sm:hidden" onClick={openModalFalse}>
                  <img src={Images.Steam} alt="" className=" w-20 h-20" />
                </div>
                <div className="lg:block md:hidden max-sm:hidden " onClick={openModalFalse}>
                  <img src={Images.WebTorrent} alt="" className=" w-20 h-20" />
                </div>
                <div className="flex flex-col items-center max-sm:hidden" onClick={openModalFalse}>
                  <img
                    src={Images.Word}
                    alt=""
                    className="w-20 h-20"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    Word
                  </p>
                </div>
                <div className="lg:block md:hidden max-sm:hidden" onClick={openModalFalse}>
                  <img src={Images.XBox} alt="" className=" w-20 h-20" />
                </div>
                <div className="flex flex-col items-center" onClick={openModalFalse}>
                  <img
                    src={Images.Netflix}
                    alt=""
                    className=" w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    Netflix
                  </p>
                </div>
                <div className="flex flex-col items-center" onClick={openModalFalse}>
                  <img
                    src={Images.YouTube}
                    alt=""
                    className="w-20 h-20 max-sm:w-16 max-sm:h-16"
                  />
                  <p className="lg:hidden text-white text-center text-sm font-sans h-full flex items-end justify-center  ">
                    Youtube
                  </p>
                </div>
              </div>
            </div>
          </div>
      </>
  )
}
