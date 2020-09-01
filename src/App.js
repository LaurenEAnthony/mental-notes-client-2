import React, { useState, useEffect } from "react";
// import Navigation from "./home/Navbar";
import Auth from "./auth/Auth";
import NotesIndex from "./main/NotesIndex";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <NotesIndex token={sessionToken} clearToken={clearToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div className="App">
      <Router>
        {/* <Navigation clearToken={clearToken} /> */}
        {protectedViews()}
      </Router>
    </div>
  );
}

export default App;
