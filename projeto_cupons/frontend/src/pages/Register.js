import React, { useState } from 'react';
import AuthService from '../Components/services/auth'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        AuthService.register(name, email, password)
            .then(response => {
                setMessage("Registro bem-sucedido!");
            })
            .catch(error => {
                setMessage("Erro no registro!");
            });
    };

    return (
        <div>
            <h2>Registrar</h2>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome" required />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" required />
                <button type="submit">Registrar</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default Register;
