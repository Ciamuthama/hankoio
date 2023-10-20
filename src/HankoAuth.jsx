import React, {
  useEffect,
  useState,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
import { Hanko, register } from "@teamhanko/hanko-elements";

const hankoApi = import.meta.env.VITE_BASE_URL;

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const hankoClient = useMemo(() => new Hanko(hankoApi), []);

  const generateUserID = () => Math.random().toString(36).substring(2, 10);


  const redirectAfterLogin = React.useCallback(() => {
      localStorage.setItem("loggedIn", "true");
      if (!localStorage.getItem("u_id")) {
          localStorage.setItem("u_id", generateUserID());
      }
      navigate("/home");
  }, [navigate]);
  
  useEffect(() => {
    register(hankoApi).catch(setError);
  }, []);

  useEffect(
    () => hankoClient.onAuthFlowCompleted(() => redirectAfterLogin()),
    [hankoClient, redirectAfterLogin]
  );

    return (
      <div className=' bg-neutral-400/40'>
        <div className="flex min-h-screen justify-center items-center mx-2">
          <div>{ error}</div>
      <hanko-auth />
      </div>
    </div>
    );
};

export default Login;
