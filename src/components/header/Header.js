import React from 'react';
import styles from './Header.module.css';


const Header = () => {
    return(
        <div className={styles.headbar}>
            <div className={styles.module}>
                <div className={styles.logo}>
                    <h1 className={styles.title}>cocktails</h1>
                </div>
            </div>
        </div>
    )
}

export default Header;