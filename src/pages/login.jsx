import Input from "../components/forms/input"
import Button from "../components/forms/button";
import styles from "./login.module.css";
import logo from '../assets/img/logo.png';
import { useState } from "react";

export default function Login() {
    const [showPassword, setShowPassword] = useState("password");

    function togglePassword() {
        setShowPassword(prev => prev === "password" ? "text" : "password");
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Não deu submit")
    }

    return (
        <div className={styles.container}>
            <div className={styles.caixa}>
                <img src={logo} />
                <form className={styles.caixa_input} onSubmit={handleSubmit}>
                    <Input classeInput={styles.inputs} type="text" place="Digite seu Email" name="email"/>
                    <Input classeInput={styles.inputs} type={showPassword} place="Digite sua Senha" name="password"/>
                        <div>
                            <input type="checkbox" id="verSenha" onClick={togglePassword} />
                            <label htmlFor="verSenha">Mostrar senha</label>
                        </div>
                        <p>Não possui uma conta? 
                            <a href="/register">Criar conta</a>    
                        </p>
                    <Button classe={styles.button_login} type="submit" text="Fazer Login" />
                </form>
            </div>
        </div>
    );
}
