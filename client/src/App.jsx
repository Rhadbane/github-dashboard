import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Projects from "./pages/Projects"
import Dahboard from "./pages/Dashboard"
import SignIn from "./pages/SignIn"
import About from "./pages/About"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        



      </Routes>
      
      
      
      </BrowserRouter>
  )
}
