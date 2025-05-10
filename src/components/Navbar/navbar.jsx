import styles from './navbar.module.css'
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Navbar({navbar}) {
    return (
    <>
        <div className={navbar}>
            <div className={styles.container}>
                <button className={styles.button_add}>Adicionar +</button>

                <div className={styles.item2}>
                    <IoIosNotificationsOutline className={styles.notification} />
                    <div className={styles.profile}></div>
                </div>
            </div>
        </div>
    </>
    )
}