import {Link} from "react-router-dom"
import { useState } from "react"


function LoginPage() {
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const user = {
            name: userName,
            password: userPassword
        }
        
        console.log(user)

        setUserName("")
        setUserPassword("")
    }

    return (
        <section className="h-[100vh] flex justify-center items-center">
            <div className="container">
                <h1 className="text-center h-[15%] leading-[33px]">Login</h1>
                <form onSubmit={handleSubmit} className="h-[85%] flex flex-col items-center justify-evenly" action="">
                    <input className="input" type="text" placeholder="Usuário" value={userName} onChange={(e) => {setUserName(e.target.value)}}/>
                    <input className="input" type="password" placeholder="Senha" value={userPassword} onChange={(e) => {setUserPassword(e.target.value)}}/>
                    <input className="input hover:bg-[var(--button-hover)]" type="submit" value="Entrar" />
                </form>
                <p className="text-center">Novo por aqui ? <Link to="/register">Registre-se</Link></p>
            </div>
        </section>
    )
}

export default LoginPage