import React, { useState } from "react";
import NavBar from "../CommonModule/NavBarModule/NavBar";
import styles from "./Upload.module.css";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeDevice, setActiveDevice] = useState("Desktop");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          {["Desktop", "Tablet", "Mobile"].map((device) => (
            <button
              key={device}
              className={activeDevice === device ? "active" : ""}
              onClick={() => setActiveDevice(device)}
            >
              {device}
            </button>
          ))}
        </div>

        {/* Upload Area */}
        <div className={styles.uploadArea}>
          <div
            className={styles.uploadBox}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {selectedFile ? (
              <p>Selected File: {selectedFile.name}</p>
            ) : (
              <>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={styles.icon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                  />
                </svg> */}

                <p>Upload Your Wallpaper</p>
              </>
            )}
          </div>
          <input type="file" onChange={handleFileChange} />
        </div>

        {/* Instruction Panel */}
        <div className={styles.instructionPanel}>
          <h3>How To Upload Your Wallpaper</h3>
          <ul>
            <li>
              Select Device Type from the side tab: Desktop, Tablet, Mobile
            </li>
            <li>Click “Upload Your Wallpaper”.</li>
            <li>Check Recommended Sizes for best quality.</li>
            <li>Make sure your file is JPEG or SVG, max 25 MB.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Upload;
