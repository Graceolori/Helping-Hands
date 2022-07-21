import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./components/common/home";
import ContactUs from "./components/contactUs";
import Contribution from "./components/contribution";
import NotFound from "./components/notFound";
import "./App.css";
import SignUp from "./components/signUp";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/contribution" element={<Contribution />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/*" element={<Navigate replace to="/notFound" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
