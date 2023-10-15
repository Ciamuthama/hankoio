import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";

import Login from "./HankoAuth";
import Home from "./home";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
 

  React.useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="bg-[url('./assets/bg.jpg')] bg-cover bg-center h-full">
      <Router>
        
          <Routes>
          <Route path="/home" element={loggedIn ? <Home /> : <Navigate to={'/login'} />} />
          <Route path="/login" element={loggedIn ?  <Navigate to={'/login'} /> : <Login/>  }/>
          <Route path="*" element={<Navigate to={"/home"}/>} />
          {/* <Route path='/' Component={Home}/> */}
          </Routes>
        
      </Router>
    </div>
  );
}

export default App;
