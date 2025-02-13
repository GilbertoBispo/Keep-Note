function RegistrationPage() {
    return (
        <section className="h-[100vh] flex justify-center items-center">
            <div className="container">
                <h1 className="h-[15%] text-center">Bem vindo! Complete aqui o seu cadastro</h1>
                <form className="h-[85%] flex flex-col items-center justify-between" action="">
                    <input className="input" type="text" placeholder="Nome"/>
                    <input className="input" type="password" placeholder="Senha" />
                    <input className="input" type="password" placeholder="Repetir senha" />
                    <input className="input hover:bg-[var(--button-hover)]  " type="submit" value="Registrar" />
                </form>
            </div>
        </section>
    )
}

export default RegistrationPage