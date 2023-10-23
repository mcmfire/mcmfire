import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.scss";

const Navbar = lazy(() => import("./components/navbar/navbar"));
const Options = lazy(() => import("./components/options/options"));
const Home = lazy(() => import("./pages/home/home"));

ReactDOM.createRoot(document.getElementById("root")).render(
    <div className="app">
        <Navbar/>
        <div className="content">
            <header>
                <Options/>
            </header>
            <main>
                <BrowserRouter>
                <Suspense fallback={<></>}>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="*" element={<Navigate to="/"/>}/>
                    </Routes>
                </Suspense>
                </BrowserRouter>
            </main>
        </div>
    </div> 
);