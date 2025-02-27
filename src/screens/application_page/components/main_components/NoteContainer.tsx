interface Note {
    id: number,
    title: string,
    description: string
}

type noteType = {
    notes: Note[]
}

function NoteContainer (noteProp: noteType) {

    return(
        <ul className="m-0 p-0 flex flex-col gap-[25px]">
            {noteProp.notes.map((note) => {
                return(
                    <li key={note.id} className="w-[335px] bg-[var(--bg-color-container)] flex gap-[13px] flex-col p-[13px_15px] shadow-[0px_5px_10px_var(--box-shadow)] rounded-[10px]">
                    <h2 className="bg-[var(--bg-color-primary)] h-[63px] text-[20px] pl-[10px] leading-[63px] rounded-[5px] overflow-clip">{note.title}</h2>
                    <p className="bg-[var(--bg-color-primary)] h-[110px] pl-[10px] rounded-[5px] overflow-scroll">{note.description}</p>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-[20px]">
                                <button><img className="w-[25px]" src="/trash3.svg" alt="trash icon" /></button>
                                <button><img className="w-[25px]" src="/pencil-square.svg" alt="edit icon" /></button>
                            </div>
                            <button><img className="w-[25px]" src="/check2.svg" alt="check icon" /></button>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default NoteContainer