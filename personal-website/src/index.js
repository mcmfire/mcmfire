import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <div className="app">
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<></>}/>
            </Routes>
        </BrowserRouter>
    </div>
);