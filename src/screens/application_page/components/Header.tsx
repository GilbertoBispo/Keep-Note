function Header() {
    return (
        <header className="bg-[var(--bg-color-container)] flex items-center justify-between p-[10px] h-[70px] shadow-[0px_5px_10px_var(--box-shadow)]">
            <h1 className='text-[color:var(--text-color)] text-[36px]'>Keep Note</h1>
            <button className="w-[30px] h-[30px]"><img className="w-[30px]" src="/person-circle.svg" alt="profile icon"/></button>
        </header>
    )
}

export default Header