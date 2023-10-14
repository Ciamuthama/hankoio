import React from "react";


export default function Home () {
  const [toggle, setToggle] = React.useState(true)
  const [time,setTime] = React.useState(new Date())
 
  const handleDismiss = () => {
    setToggle(!toggle)
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
    setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  
  

    const format = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12:true,
    }
  

  

  const currentTime = time.toLocaleDateString('en-US', format)

  return (
    <div className="flex justify-between flex-col h-screen" >
      <div className="lg:bg-neutral-400/50 md:bg-neutral-950 max-sm:bg-neutral-950 flex justify-between items-center flex-row font-sans">
        <div className="md:hidden max-sm:hidden lg:flex flex-row justify-between items-end gap-2 mx-3 py-1">
          <div className="md:hidden max-sm:hidden lg:block bg-[url('./assets/apple.svg')] bg-contain bg-center bg-no-repeat p-2"></div>
          <p className="text-xs font-semibold text-white">Finder</p>
          <p className="text-xs font-medium text-white">File</p>
          <p className="text-xs font-medium text-white">Edit</p>
          <p className="text-xs font-medium text-white ">View</p>
          <p className="text-xs font-medium text-white">Windows</p>
          <p className="text-xs font-medium text-white">Help</p>
        </div>
        <div className="flex flex-row md:flex-row-reverse max-sm:flex-row-reverse justify-between gap-2 mx-3 lg:w-auto md:w-full max-sm:w-full">
          <div className="flex-row flex gap-2">
            <p className="text-xs  md:text-end font-medium text-white">WiFi</p>
            <p className="text-xs font-medium md:text-end  text-white">Battery</p>
          </div>
          <p className="text-xs lg:text-end md:float-left font-medium text-white"> { currentTime } </p>
        </div>
      </div>

      { toggle &&
        
       ( <div className={`flex flex-col transition-transform transform scale-100 lg:bg-neutral-900 p-1 gap-4 mx-auto lg:w-2/4 md:w-4/5 max-sm:w-auto max-sm:h-4/5 rounded`}>
        <div className="flex flex-row mb-3 gap-2">
          <div className="lg:flex flex-row gap-2 bg-neutral-600 w-full p-1 py-2 rounded-md md:hidden  max-sm:hidden">
            <div className={` w-4 h-4 bg-red-600 rounded-full transition-transform  transform ${ toggle ? 'scale-80': 'scale-100'} `} onClick={handleDismiss}></div>
            <div className=" w-4 h-4 bg-orange-300 rounded-full"></div>
            <div className="w-4 h-4  bg-green-600 rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="bg-neutral-800 w-3 h-full rounded-md lg:block max-sm:hidden md:hidden">
            <div className="bg-neutral-600 w-3 h-1/4 rounded-md"></div>
          </div>

          <div className="flex flex-col p-2 items-center justify-center">
            <div className="flex items-center pb-2">
              <p className="text-neutral-500 text-sm lg:block  max-sm:hidden md:hidden">Application</p>
            </div>
            <div className="flex flex-row flex-wrap lg:items-center gap-4 mx-auto cursor-pointer">
              <div className="lg:block md:hidden max-sm:hidden bg-[url('./assets/1Blocker.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="lg:block md:hidden max-sm:hidden bg-[url('./assets/AndroidStudio.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="lg:block md:hidden max-sm:hidden bg-[url('./assets/AppleTv.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="bg-[url('./assets/Arc.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="bg-[url('./assets/Alva.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="bg-[url('./assets/Bloody7.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="bg-[url('./assets/blyOS.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="bg-[url('./assets/Calculator.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="bg-[url('./assets/Chrome.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="bg-[url('./assets/Contacts.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="bg-[url('./assets/Discord.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="lg:block md:hidden max-sm:hidden bg-[url('./assets/Docker.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="bg-[url('./assets/Earth.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="bg-[url('./assets/FaceTime.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="lg:block md:hidden bg-[url('./assets/FanControl.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="bg-[url('./assets/GitHub.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="lg:block md:hidden max-sm:hidden bg-[url('./assets/Idena.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="bg-[url('./assets/Instagram.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="bg-[url('./assets/Keep.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="lg:block md:hidden max-sm:hidden bg-[url('./assets/LanScan.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="lg:block md:hidden max-sm:hidden bg-[url('./assets/Node.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="bg-[url('./assets/Phone.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="bg-[url('./assets/Podcasts.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="lg:block md:hidden max-sm:hidden bg-[url('./assets/Settings.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="md:hidden bg-[url('./assets/Sublime.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="bg-[url('./assets/Spotify.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="lg:block md:hidden max-sm:hidden bg-[url('./assets/Steam.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="lg:block md:hidden max-sm:hidden bg-[url('./assets/WebTorrent.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="bg-[url('./assets/Word.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="lg:block md:hidden bg-[url('./assets/Xbox.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
              <div className="bg-[url('./assets/Youtube.png')] bg-center bg-contain bg-no-repeat w-16 h-16"></div>
            </div>
          </div>
        </div>
      </div>)}

      <div className="flex justify-center items-center flex-row mx-auto my-4 cursor-pointer bg-neutral-100/40 rounded-xl shadow-[0_0_10px_2px_rgba(67,67,67,0.3)] ">
        <div className="lg:block md:hidden  max-sm:hidden bg-[url('./assets/Finder.png')] bg-center bg-contain w-16 h-16"></div>
        <div className=" bg-[url('./assets/AppStore.png')] bg-center bg-contain w-16 h-16" onClick={()=>setToggle(true)}></div>
        <div className=" bg-[url('./assets/Message.png')] bg-center bg-contain w-16 h-16"></div>
        <div className=" max-sm:hidden bg-[url('./assets/Telegram.png')] bg-center bg-contain w-16 h-16"></div>
        <div className=" bg-[url('./assets/Gmail.png')] bg-center bg-contain w-16 h-16"></div>
        <div className=" bg-[url('./assets/Safari.png')] bg-center bg-contain w-16 h-16"></div>
        <div className=" max-sm:hidden bg-[url('./assets/Calendar.png')] bg-center bg-contain w-16 h-16"></div>
        <div className=" bg-[url('./assets/Music.png')] bg-center bg-contain w-16 h-16"></div>
        <div className="lg:block md:hidden  max-sm:hidden bg-[url('./assets/VScode.png')] bg-center bg-contain w-16 h-16"></div>
        <div className="lg:block md:hidden  max-sm:hidden bg-[url('./assets/Terminal.png')] bg-center bg-contain w-16 h-16"></div>
        <div className="lg:block md:hidden  max-sm:hidden bg-[url('./assets/JetBrains.png')] bg-center bg-contain w-16 h-16"></div>
        <div className="lg:block md:hidden  max-sm:hidden bg-center bg-contain w-0.5 h-12 bg-neutral-200 rounded mx-2"></div>
        <div className="lg:block md:hidden  max-sm:hidden bg-[url('./assets/Folder.png')] bg-center bg-contain w-16 h-16 "></div>
        <div className="lg:block md:hidden  max-sm:hidden bg-[url('./assets/Trash.png')] bg-center bg-contain w-16 h-16"></div>
      </div>
    </div>
  );
}
