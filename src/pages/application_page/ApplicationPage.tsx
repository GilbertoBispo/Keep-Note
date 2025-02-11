import Header from "./components/Header"
import Main from "./components/Main"

function ApplicationPage() {
    return (
        <div className="h-[100vh] flex flex-col gap-[15px]">
            <Header/>
            <Main/>
        </div>
    )
}

export default ApplicationPage