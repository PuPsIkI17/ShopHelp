import React from "react";
import { Routes , Route} from "react-router-dom";
import Main from "./Pages/Main";
import Additional from "./Pages/Additional";


function Pages() {
  return (
    <div className="Pages">
        <Routes>
            <Route path="/"  element = { <Main />} />
            <Route path="/qr" element = {<Additional />} />
        </Routes>
    </div>
  );
}

export default Pages;