import React, {
  useCallback,
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
  const hankoClient = useMemo(() => new Hanko(api), []);

  const redirectAfterLogin = useCallback(() => {
    navigate("/home", { replace: true });
  }, [navigate]);

  useEffect(() => {
    register(api).catch(setError);
  }, []);

  useEffect(
    () => hankoClient.onAuthFlowCompleted(() => redirectAfterLogin()),
    [hankoClient, redirectAfterLogin]
  );

    return (
       <div className="flex min-h-screen justify-center items-center bg-neutral-900">
      <hanko-auth />
    </div>
    );
};

export default Login;
