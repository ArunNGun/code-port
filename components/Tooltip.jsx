import { useEffect, useState } from 'react';
import styles from '../styles/Tooltip.module.css';


const Tooltip = ({ message, children, showTooltip = false }) => {

    const [showTip, setShowTip] = useState(false)

    useEffect(() => {
        if (showTooltip) {
            setShowTip(true)
            const id = setTimeout(() => {
                setShowTip(false)
            }, 7000)
        }
        // return () => {
        //     clearTimeout(id)
        // }
    },
        [])

    return (
        <div className={styles.tooltipContainer}>
            {children}
            <div className={showTip ? styles.tooltipActive : styles.tooltip}>{message}</div>
        </div>
    );
};

export default Tooltip