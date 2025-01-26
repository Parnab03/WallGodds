import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBarWithNav from "./Components/CommonModule/SideBarModule/SideBar";
import Gallery from "./Components/GalleryModule/Gallery";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SideBarWithNav />} />
                <Route path="/gallery/*" element={<Gallery />} /> 
            </Routes>
        </Router>
    );
}

export default App;