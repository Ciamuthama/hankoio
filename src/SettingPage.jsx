import React from "react";
import { Hanko, register } from "@teamhanko/hanko-elements";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./constant";
import { Images } from "./images";

const hankoApi = import.meta.env.VITE_BASE_URL;

export default function SettingPage() {
  // const [imageData, setImageData] = React.useState(null);
  // const inputRef = React.useRef(null);

  
  const navigate = useNavigate();
  const { urlLogin } = useGlobalContext();
  const hankoClient = React.useMemo(() => new Hanko(hankoApi), []);

  const Logout = () => {
    hankoClient.user.logout().catch(console.log("An Error Occurred!😥"));
  };

  const redirectToLogin = React.useCallback(() => {
    navigate(urlLogin);
  }, [navigate, urlLogin]);

  React.useEffect(() => {
    register(hankoApi).catch(console.log("An Error Occurred!😥"));
  }, []);

  React.useEffect(() => {
    if (!hankoClient.session.isValid()) {
      redirectToLogin();
    }
  }, [hankoClient, redirectToLogin]);

  React.useEffect(
    () => () => hankoClient.onUserLoggedOut(() => redirectToLogin()),
    [hankoClient, redirectToLogin]
  );

  // const handleImageUpload = (event) => {
  //   const file = event.target.image[0]
  //   const reader = new FileReader();

  //   reader.onload = (e) => {
  //     const dataURL = e.target.result;
  //     setImageData(dataURL);
  //     localStorage.setItem('imageData', dataURL);
  //   };

  //   reader.readAsDataURL(file);
  // };

  return (
    <>
      <div className="bg-neutral-200 flex flex-col items-center my-2 rounded-md">
        <div>
          <p className="text-center">Your Profile</p>
        </div>
        <div className="flex flex-col items-center gap-2 my-2">
          <div className="bg-neutral-400 rounded-full w-20 h-20 relative">
          
              <img src={Images.man} className='w-20 h-20 rounded-full' />
            <img src={Images.pencil} alt="Edit your avatar" className='flex flex-row justify-center absolute bottom-1 right-1 w-3 h-3.5 border-b-2 border-black'/>
          </div>
          <div className="flex justify-center items-center mx-2">
            <hanko-profile  />
          </div>
          <div>
            <button
              className="flex flex-row items-center gap-2 bg-red-500 rounded-md p-2 px-10 text-base font-semibold font-sans text-white hover:bg-red-500/85"
              onClick={Logout}
            >
              Sign Out
              <img src={ Images.logOut} className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
