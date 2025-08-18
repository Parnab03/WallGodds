import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Gallery from "./Components/GalleryModule/Gallery";
import "./App.css";
import Home from "./Components/HomeModule/Home";
import Upload from "./Components/UploadModule/Upload";
import Aboutus from "./Components/AboutModule/Aboutus";
import Error404 from "./Components/ErrorModule/Error404";
import Profile from "./Components/ProfileModule/Profile";
import Footer from "./Components/AboutModule/Footer"; 



function App() {
    return (
        <Router>
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery/*" element={<Gallery />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/*" element={<Error404 />} />
            </Routes>
           
        
    
      </Router>
    );
}

export default App;
