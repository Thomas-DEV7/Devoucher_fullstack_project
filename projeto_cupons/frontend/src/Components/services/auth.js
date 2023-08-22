import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

const register = (name, email, password) => {
    return axios.post(`${API_URL}/register`, {
        name,
        email,
        password,
    });
};

const login = (email, password) => {
    return axios
        .post(`${API_URL}/login`, {
            email,
            password,
            device_name: 'browser', // Pode ser modificado conforme a necessidade.
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    // Remove o usuário do local storage para fazer logout
    localStorage.removeItem('user');
};

export default {
    register,
    login,
    logout,
};
