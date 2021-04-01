// after imports please add
import axios from "axios";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; // <--- remove BrowserRouter
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";

axios.defaults.baseURL = "http://127.0.0.1:8000";

class App extends Component {
  render() {
    return (
     <>
        <BrowserRouter> {/* replace BrowserRouter with Root */}
          <ToastContainer hideProgressBar={false} newestOnTop={true} />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter> {/* replace BrowserRouter with Root */}
      </>
    );
  }
}

export default App;
