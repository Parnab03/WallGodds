import React, { useEffect } from 'react';
import styles from './Toast.module.css';

const Toast = ({ message, type = 'success', isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className={`${styles.toast} ${styles[type]} ${styles.show}`}>
            <div className={styles.icon}>
                {type === 'success' && '✓'}
                {type === 'error' && '✕'}
                {type === 'info' && 'ℹ'}
            </div>
            <span className={styles.message}>{message}</span>
            <button className={styles.closeBtn} onClick={onClose}>
                ×
            </button>
        </div>
    );
};

export default Toast;
