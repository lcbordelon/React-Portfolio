import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router basename="/">
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxMXxibzhqUUtUYUUwWXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
