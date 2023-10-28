import React, {
  useEffect,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
import { Hanko, HankoError, register } from "@teamhanko/hanko-elements";
import { useGlobalContext } from "./constant";
import Home from "./home";
const hankoApi = import.meta.env.VITE_BASE_URL;

const Login = () => {
  const navigate = useNavigate()
  const {url} = useGlobalContext()
  const hankoClient = useMemo(() => new Hanko(hankoApi), []);
  const userID = () => Math.random().toString(36).substring(2, 10);

  const {active} = useGlobalContext()

  const switcher=() => {
    switch (active) {
      case "Home":
        return <Home />;
      default:
        null;
    }
  }

  const redirectAfterLogin = React.useCallback(() => {
      localStorage.setItem("loggedIn", "true");
      if (!localStorage.getItem("u_id")) {
          localStorage.setItem("u_id", userID());
      }
    navigate(url);
    // navigate(switcher)
  }, [navigate, url]);
  
  useEffect(() => {
    register(hankoApi).catch(HankoError);
  }, []);

  useEffect(
    () => hankoClient.onAuthFlowCompleted(() => redirectAfterLogin()),
    [hankoClient, redirectAfterLogin]
  );

    return (
      <div className=' bg-neutral-400/40'>
        <div className="flex min-h-screen justify-center items-center mx-2">
          <hanko-auth />
      </div>
    </div>
    );
};

export default Login;
