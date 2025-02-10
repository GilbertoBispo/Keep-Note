function LoginPage() {
    return (
        <section className="bg-[var(--bg-color-container)] w-[300px] flex shadow-[0px_5px_10px_var(--box-shadow)] justify-self-center flex-col h-[250px] p-[15px]  rounded-[10px]">
            <h1 className="text-center h-[15%] leading-[33px]">Login</h1>
            <form className="h-[85%] flex flex-col items-center justify-evenly" action="">
                <input className="bg-[var(--bg-color-primary)] w-[80%] h-[50px] rounded-[5px] pl-[15px]" type="text" placeholder="Usuário" />
                <input className="bg-[var(--bg-color-primary)] w-[80%] h-[50px] rounded-[5px] pl-[15px]" type="password" placeholder="Senha" />
                <input className="bg-[var(--bg-color-primary)] w-[80%] h-[50px] rounded-[5px] hover:bg-[var(--button-hover)]" type="submit" value="Entrar" />
            </form>
            <p className="text-center">Novo por aqui ? <a className="text-gray-400 hover:text-gray-500" href="">Registrar</a></p>
        </section>
    )
}

export default LoginPage