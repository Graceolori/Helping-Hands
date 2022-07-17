import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./components/common/home";
import ContactUs from "./components/contactUs";
import Contribution from "./components/contribution";
import NotFound from "./components/notFound";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/contribution" element={<Contribution />} />
            <Route path="/notFound" element={<NotFound />}></Route>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/*" element={<Navigate replace to="/notFound" />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
