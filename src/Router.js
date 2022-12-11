import React from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BussinessRequirement from "./Pages/BussinessRequirement";



export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/bussiness-requirement" element={<BussinessRequirement/>} />
            </Routes>
        </BrowserRouter>
    );
}