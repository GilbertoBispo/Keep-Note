function Main() {
    return (
        <main className="flex flex-col items-center gap-[25px] ">
            <div className="h-[30px] bg-[var(--bg-color-container)] w-[335px] h-[58px] flex items-center justify-center px-[15px] rounded-[10px] shadow-[0px_5px_10px_var(--box-shadow)]">
                <input className="bg-[var(--bg-color-primary)] w-full p-[5px] rounded-[5px]" type="text" placeholder="Adicionar Tarefa"/>
            </div>

            <div className="w-[335px] bg-[var(--bg-color-container)] flex gap-[13px] flex-col p-[13px_15px] shadow-[0px_5px_10px_var(--box-shadow)] rounded-[10px]">
                <h2 className="bg-[var(--bg-color-primary)] h-[63px] text-[20px] pl-[10px] leading-[63px] rounded-[5px]">Título</h2>
                <p className="bg-[var(--bg-color-primary)] h-[110px] pl-[10px] rounded-[5px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dolorum?</p>
                <div className="flex justify-between">
                    <div className="flex items-center gap-[20px]">
                        <button><img className="w-[25px]" src="/trash3.svg" alt="trash icon" /></button>
                        <button><img className="w-[25px]" src="/pencil-square.svg" alt="edit icon" /></button>
                    </div>
                    <button><img className="w-[25px]" src="/check2.svg" alt="check icon" /></button>
                </div>
            </div>
        </main>
    )
}

export default Main