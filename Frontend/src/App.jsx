import SideBarWithNav from "./Components/CommonModule/SideBarModule/SideBar";
import Gallery from "./Components/GalleryModule/Gallery";
import "./App.css";
import { ThemeProvider } from "./ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <SideBarWithNav />
            <Gallery />
        </ThemeProvider>
    );
}

export default App;
