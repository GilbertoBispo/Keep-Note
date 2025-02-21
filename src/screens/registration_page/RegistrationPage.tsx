import { useState } from "react"

function RegistrationPage() {
    const [userCreateName, setCreateName] = useState("")
    const [userCreatePassword, setCreatePassword] = useState("")
    const [userRepeatPassword, setRepeatPassword] = useState("")

    function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const rgtrUser = {
            name: userCreateName,
            password: userCreatePassword
        }

        console.log(rgtrUser)

        setCreateName("")
        setCreatePassword("")
        setRepeatPassword("")
    }

    return (
        <section className="h-[100vh] flex justify-center items-center">
            <div className="container">
                <h1 className="h-[15%] text-center">Bem vindo! Complete aqui o seu cadastro</h1>
                <form onSubmit={handleRegister} className="h-[85%] flex flex-col items-center justify-between" action="">
                    <input className="input" type="text" placeholder="Nome" value={userCreateName} onChange={(e) => {setCreateName(e.target.value)}}/>
                    <input className="input" type="password" placeholder="Senha" value={userCreatePassword} onChange={(e) => {setCreatePassword(e.target.value)}}/>
                    <input className="input" type="password" placeholder="Repetir senha" value={userRepeatPassword} onChange={(e) => {setRepeatPassword(e.target.value)}}/>
                    <input className="input hover:bg-[var(--button-hover)]  " type="submit" value="Registrar"/>
                </form>
            </div>
        </section>
    )
}

export default RegistrationPage