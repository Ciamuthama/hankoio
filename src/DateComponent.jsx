import React from "react";

export default function DateComponent() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const format = {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };

    const format2 = {
        weekday: "long",
        
  }

  const formatMonth = {
    month:"long",
    day:"numeric",
  }

    const currentTime = time.toLocaleTimeString("en-US", format);
    const currentDate = time.toLocaleDateString('en-US', format2)
    const currentMonth = time.toLocaleDateString("en-US", formatMonth)
  return (
    <>
      <div className="relative mx-4 lg:hidden md:flex flex-col max-sm:flex bg-[url('./assets/404.jpg')]   bg-no-repeat bg-cover bg-center rounded-2xl">

        <div>
          <h1 className="text-white/30 font-sans font-extrabold text-[100px]  leading-relaxed float-right mr-1">{currentTime}</h1>
        </div>
          <div className="absolute bottom-2 gap-0 mx-3">
          <h1 className="text-white font-sans text-[50px] leading-none font-semibold">{currentDate}</h1> 
          <h1 className="text-white font-sans text-[25px] leading-none uppercase font-semibold">{ currentMonth }</h1>
          </div>
      </div>
    </>
  );
}
