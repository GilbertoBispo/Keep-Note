import Header from "./components/Header"
import Main from "./components/Main"

function ApplicationPage() {
    return (
        <div className="h-full flex flex-col gap-[15px] w-full">
            <Header/>
            <Main/>
        </div>
    )
}

export default ApplicationPage