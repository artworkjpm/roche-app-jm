import React, { Component } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
import PatientList from "./components/medico/patientList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/:post_id" component={Post} />
            <Route exact path="/patients/:practitionerId" component={PatientList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
