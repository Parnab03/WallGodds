import React, { useEffect } from 'react';
import styles from './Popup.module.css';
import circle from '../../ErrorModule/Error404Assests/Circle.svg';
import triangle from '../../ErrorModule/Error404Assests/Triangle.svg';
import square from '../../ErrorModule/Error404Assests/Square.svg';

const Popup = ({ isOpen, onClose, message = "Content here", title = "DOWNLOAD STATUS" }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('popup-open');
        } else {
            document.body.classList.remove('popup-open');
        }

        return () => {
            document.body.classList.remove('popup-open');
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <div className={styles.elements}>
                        <img src={circle} alt="circle" />
                        <img src={triangle} alt="triangle" />
                        <img src={square} alt="square" />
                    </div>
                    <button type="button" className={styles.closeButton} aria-label="Close" onClick={onClose}></button>
                </div>
                <div className={styles.content}>
                    <p className={styles.message}>{message}</p>
                    <div className={styles.buttonContainer}>
                        <a 
                            href="https://discord.gg/wallgodds" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.actionButton}
                        >
                            Discord
                        </a>
                        <a 
                            href="https://github.com/Parnab03/WallGodds" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.actionButton}
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
