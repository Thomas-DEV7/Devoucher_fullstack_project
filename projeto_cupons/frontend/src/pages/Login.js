import React, { useState } from 'react';
import AuthService from '../Components/services/auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        AuthService.login(email, password)
            .then(response => {
                setMessage("Login bem-sucedido!");
                // Aqui você pode redirecionar o usuário ou fazer outras ações necessárias após o login.
            })
            .catch(error => {
                setMessage("Erro no login!");
            });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" required />
                <button type="submit">Entrar</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default Login;
