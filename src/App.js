import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./Navbar/Navbar"
import {Login} from "./Login/Login";
import { Registro } from "./Registro/Registro";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />

        </Routes>
      
      </BrowserRouter>
    </div>
  )
}
