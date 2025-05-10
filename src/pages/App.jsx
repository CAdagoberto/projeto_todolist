import Navbar from "../components/Navbar/navbar";
import NavbarLateral from "../components/Navbar/navbarLateral";
import style from './app.module.css';

export default function App() {
    return (
        <div className={style.appContainer}>
            <div className={style.lateral}>
                <NavbarLateral />
            </div>
            <div className={style.contentArea}>
                <Navbar navbar={style.navbar}/>
                <div className={style.mainContent}>
                    <h1>Conteúdo</h1>
                </div>
            </div>
        </div>
    );
}
