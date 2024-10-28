import React, {useState} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { useNavigate } from "react-router-dom";

export function Registro() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const enviar = async (e) =>{
        e.preventDefault();

        try {
            const response = await axios.post("https://api.sheetbest.com/sheets/787a94d5-6204-4a4c-83f0-774cd7912a67", {
                Email: email,
                Password: password
            });

            alert("Registro exitoso!")
            setEmail("");
            setPassword("");
            navigate("/login")
        } catch (error) {
            console.error("Error al enviar los datos: ", error)
            alert("Hubo un error al registrar");
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={enviar}>
                <fieldset disabled="">
                    <legend>Registro de usuario</legend>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledSelect" className="form-label">
                            Password
                        </label>
                        <input
                            type="text"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>
                    <center><button type="submit" className="btn btn-primary">
                       Submit
                    </button></center>
                </fieldset>
            </form>
        </div>
    )
}
