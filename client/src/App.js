import { Fragment } from "react";
import Hero from "./Components/Hero/Hero";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Recommend from './Components/Home/Recommend'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Fragment><Hero/><Recommend/><Home/><Footer/></Fragment>}/>
                <Route path="/gift" element={<Fragment><Header/></Fragment>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
