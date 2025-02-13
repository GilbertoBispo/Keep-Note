import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ApplicationPage from "./screens/application_page/ApplicationPage"
import RegistrationPage from "./screens/registration_page/RegistrationPage"
import LoginPage from "./screens/login_page/LoginPage"
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/app" element={<ApplicationPage/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
      </Routes>
    </Router>
  )
}

/*
function App() {

  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}
*/
export default App