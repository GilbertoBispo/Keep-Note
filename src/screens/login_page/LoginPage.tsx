import {Link} from "react-router-dom"

function LoginPage() {
    return (
        <section className="h-[100vh] flex justify-center items-center">
            <div className="container">
                <h1 className="text-center h-[15%] leading-[33px]">Login</h1>
                <form className="h-[85%] flex flex-col items-center justify-evenly" action="">
                    <input className="input" type="text" placeholder="Usuário" />
                    <input className="input" type="password" placeholder="Senha" />
                    <input className="input hover:bg-[var(--button-hover)]" type="submit" value="Entrar" />
                </form>
                <p className="text-center">Novo por aqui ? <Link to="/register">Registre-se</Link></p>
            </div>
        </section>
    )
}

export default LoginPage