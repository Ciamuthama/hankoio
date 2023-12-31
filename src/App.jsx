import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";

import Login from "./HankoAuth";
import Home from "./home";
import Loading from "./Loading";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(true)
 

  React.useEffect(() => {
    if (localStorage.getItem("loggedIn", "true") && localStorage.getItem("u_id")) {
      setLoggedIn(true);
      setLoading(false);
    }
  }, []);


  React.useEffect(() => {
    setTimeout(() => {
        setLoading(false)
      },[10000])
  },[])


  return (
    <div className='h-screen'>
  
      {loading ? <Loading /> : <div className="bg-[url('./assets/bg.jpg')] bg-cover bg-center bg-no-repeat h-full">
        <Router>
          <Routes>
            <Route path="/" element={loggedIn ? <Home /> : <Navigate to={'/login'} />} />
            <Route path="/login" element={loggedIn ? <Navigate to={'/'} /> : <Login />} />
          
          </Routes>
        </Router>
      
      </div>}
    </div>
  );
}

export default App;
