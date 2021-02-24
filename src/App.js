import React from "react";
// import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default App;
