import React from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import {HomePage, BussinessRequirement, ThankYou} from "./Pages";




export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/bussiness-requirement" element={<BussinessRequirement/>} />
                <Route path="/thank-you" element={<ThankYou/>} />
            </Routes>
        </BrowserRouter>
    );
}