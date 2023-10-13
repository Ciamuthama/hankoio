import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { register, Hanko } from "@teamhanko/hanko-elements";
// eslint-disable-next-line no-undef
const hankoApi = process.env.MY_API_URL;
console.log(hankoApi)

const Login = () => {
    const navigate = useNavigate();
    const hanko = useMemo(() => new Hanko(hankoApi), []);

    React.useEffect(() => {
        register(hankoApi).catch((error) => {
            console.log(error);
        });
    }, []);

    const generateUserID = () => Math.random().toString(36).substring(2, 10);

//👇🏻 executes after a user logs in
const redirectAfterLogin = useCallback(() => {
    localStorage.setItem("loggedIn", "true");
    if (!localStorage.getItem("u_id")) {
        localStorage.setItem("u_id", generateUserID());
    }
    navigate("/");
}, [navigate]);

//👇🏻 triggered after a successful sign in
React.useEffect(
    () =>
        hanko.onAuthFlowCompleted(() => {
            redirectAfterLogin();
        }),
    [hanko, redirectAfterLogin]
);

    return (
       <div className="flex min-h-screen justify-center items-center ">
      <hanko-auth />
    </div>
    );
};

export default Login;