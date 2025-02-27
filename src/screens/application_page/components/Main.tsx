import NoteContainer from "./main_components/NoteContainer"
import { useState } from "react"

interface Note {
    id: number,
    title: string,
    description: string
}

function Main() {
    const [noteTitle, setNoteTitle] = useState("")
    const [noteDescription, setNoteDescription] = useState("")
    const [note, setNote] = useState<Note[]>([])
    

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const newNote = {
            id: Date.now(),
            title: noteTitle,
            description: noteDescription
        }

        setNoteTitle("")
        setNoteDescription("")
        setNote([...note, newNote])
    }
    
    return (
        <main className="flex flex-col items-center gap-[25px]">
            <form action="" onSubmit={handleSubmit} className="h-[136px] bg-[var(--bg-color-container)] w-[335px] h-[58px] flex items-center p-[15px] rounded-[10px] shadow-[0px_5px_10px_var(--box-shadow)] flex-col justify-between">
                <input value={noteTitle} onChange={(e) => {setNoteTitle(e.target.value)}} className="bg-[var(--bg-color-primary)] w-full p-[5px] rounded-[5px]" type="text" placeholder="Título da nota"/>
                <input value={noteDescription} onChange={(e) => {setNoteDescription(e.target.value)}} className="bg-[var(--bg-color-primary)] w-full p-[5px] rounded-[5px]" type="text" placeholder="Descrição da nota"/>
                <input className="bg-[var(--bg-color-primary)] w-full p-[5px] rounded-[5px] hover:bg-[var(--button-hover)]" type="submit" value="Adicionar"/>
            </form>
            <NoteContainer notes={note}/>
        </main>
    )
}

export default Main