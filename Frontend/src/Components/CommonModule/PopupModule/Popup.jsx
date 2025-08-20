import React, { useEffect } from 'react';
import styles from './Popup.module.css';

const Popup = ({ isOpen, onClose, message, title = "Download Status" }) => {
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
                    <h3 className={styles.title}>{title}</h3>
                    <button className={styles.closeButton} onClick={onClose}>
                        ×
                    </button>
                </div>
                <div className={styles.content}>
                    <p className={styles.message}>{message}</p>
                    <div className={styles.socialLinks}>
                        <a 
                            href="https://discord.gg/wallgodds" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                        >
                            Discord
                        </a>
                        <a 
                            href="https://github.com/Parnab03/WallGodds" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.socialLink}
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
