import { AiFillRocket } from "react-icons/ai";
import styles from './Header.module.css';

export function Header(){
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logoCentral}>
                    <strong><AiFillRocket size={30} /></strong>
                    <span className={styles.to}>to</span>
                    <span className={styles.do}>do</span>
                </div>
            </header>
        </>
    )
}