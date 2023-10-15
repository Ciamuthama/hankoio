import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { register, Hanko } from "@teamhanko/hanko-elements";

const hankoApi = import.meta.env.VITE_BASE_URL;

const Login = () => {
  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const redirectAfterLogin = useCallback(() => {
    navigate("/home", {replace: true});
  }, [navigate]);

  React.useEffect(
    () =>
      hanko.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  React.useEffect(() => {
    register(hankoApi).catch((error) => {
      alert(error)
    });
  }, []);

    return (
       <div className="flex min-h-screen justify-center items-center bg-neutral-900">
      <hanko-auth />
    </div>
    );
};

export default Login;
