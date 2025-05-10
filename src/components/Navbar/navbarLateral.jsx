
import styles from './navbarLateral.module.css'
import PerfilIcon from '../profile/PerfilIcon'
import Sidebar from '../Sidebar'

export default function NavbarLateral({navbar}) {
    return (
    <>
        <div className={navbar}>
            <div className={styles.container}>
                <div className={styles.perfil}>
                    <PerfilIcon classProfile={styles.profileIcon} />
                    <h5>Nome da empresa</h5>
                    
                </div>
                <hr />

                <div className={styles.myWork}>
                    <PerfilIcon classProfile={styles.myWorkIcon}/>
                    <p>My Work</p>
                </div>

                <Sidebar />

                <div className={styles.btnConvidar}>
                    <button>Convidar Pessoas</button>
                </div>
            </div>
        </div>
    </>
    )
}