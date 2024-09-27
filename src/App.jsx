import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Galareya from "./pages/Galareya";
import Comfystore from "./pages/Comfystore";

function App() {
  return (
    <div>
      <div className="navbar bg-base-100  p-4 flex flex-wrap  gap-10  ">
        <a className="btn btn-ghost text-xl mr-64 ml-24">Store</a>
        <button className="btn btn-smbtn btn-outline btn-accent">
          {" "}
          <Link to="./">
            Comfystore <br />
          </Link>
        </button>

        <button className="btn btn-outline btn-accent">
          <Link to="./galareya">Galareya</Link>
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Comfystore />} />

        <Route path="/galareya" element={<Galareya />} />
      </Routes>
    </div>
  );
}

export default App;
