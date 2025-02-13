import NoteContainer from "./main_components/NoteContainer"
function Main() {
    return (
        <main className="flex flex-col items-center gap-[25px] ">
            <form action="" className="h-[136px] bg-[var(--bg-color-container)] w-[335px] h-[58px] flex items-center p-[15px] rounded-[10px] shadow-[0px_5px_10px_var(--box-shadow)] flex-col justify-between">
                <input className="bg-[var(--bg-color-primary)] w-full p-[5px] rounded-[5px]" type="text" placeholder="Título da nota"/>
                <input className="bg-[var(--bg-color-primary)] w-full p-[5px] rounded-[5px]" type="text" placeholder="Descrição da nota"/>
                <input className="bg-[var(--bg-color-primary)] w-full p-[5px] rounded-[5px] hover:bg-[var(--button-hover)]" type="button" value="Adicionar"/>
            </form>
            <NoteContainer/>
        </main>
    )
}

export default Main