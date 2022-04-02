import React from "react";
import { Routes , Route} from "react-router-dom";
import Main from "./Pages/Main";
import Additional from "./Pages/Additional";

import Tech from "./Pages/Tech";
import Food from "./Pages/Food";
import Pharmacy from "./Pages/Pharmacy";
import All from "./Pages/All";
import Product from "./Pages/Product";


function Pages() {
  return (
    <div className="Pages">
        <Routes>
            <Route path="/"  element = { <Main />}  exact={true}/>
            <Route path="/barcode" element = {<Additional />} />
            <Route path="/tech" element = {<Tech />} />
            <Route path="/food" element = {<Food />} />
            <Route path="/pharmacy" element = {<Pharmacy />} />
            <Route path="/all" element = {<All />} />
            <Route path="/product" element = {<Product />} />
        </Routes>
    </div>
  );
}

export default Pages;