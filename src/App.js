import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./components/home";
import ContactUs from "./components/contactUs";
import Contribution from "./components/contribution";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Routes>
            {/* <Route exact path="/*" element={<AppBody />} /> */}
            <Route path="/home" component={Home} />
            <Route path="/contactUs" component={ContactUs} />
            <Route path="/contribution" component={Contribution} />
            {/* <Route path="/not-found" component={NotFound}></Route> */}
            {/* <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" /> */}
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
