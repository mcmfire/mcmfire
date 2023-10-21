import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("./pages/home/home"));

ReactDOM.createRoot(document.getElementById("root")).render(
    <div className="app">
        <BrowserRouter>
        <Suspense fallback={<></>}>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </Suspense>
        </BrowserRouter>
    </div> 
);