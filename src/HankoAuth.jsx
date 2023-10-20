import React, {
  useEffect,
  useState,
  useMemo,
} from "react";
import { Navigate,Link } from "react-router-dom";
import { Hanko, register } from "@teamhanko/hanko-elements";
import Home from "./home";

const hankoApi = import.meta.env.VITE_BASE_URL;

const Login = () => {
  
  const [error, setError] = useState(null);
  const hankoClient = useMemo(() => new Hanko(hankoApi), []);

  
  const generateUserID = () => Math.random().toString(36).substring(2, 10);


  const redirectAfterLogin = React.useCallback(() => {
      localStorage.setItem("loggedIn", "true");
      if (!localStorage.getItem("u_id")) {
          localStorage.setItem("u_id", generateUserID());
      }
      <Navigate to={<Home/>} replace={true} /> 
  }, []);
  
  useEffect(() => {
    register(hankoApi).catch(setError);
  }, []);

  useEffect(
    () => hankoClient.onAuthFlowCompleted(() => redirectAfterLogin()),
    [hankoClient, redirectAfterLogin]
  );

    return (
      <div className=' bg-neutral-400/40'>
        <a href="https://github.com/Ciamuthama/hankoio" className="rounded-md p-5 bg-blue-400 text-white font-sans text-sm no-underline">Please visit my Github for instruction on the login process</a>
        <div className="flex min-h-screen justify-center items-center mx-2">
          <hanko-auth />
      </div>
    </div>
    );
};

export default Login;
