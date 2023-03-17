import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Router from "./Router";
import "./App.css";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Router />
      <Footer/>
    </div>
  );
}

export default App;
