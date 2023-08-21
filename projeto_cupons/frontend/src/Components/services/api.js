

import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

const CupomService = {
    getAll: function() {
        return axios.get(`${API_URL}cupons`);
    },

    getOne: function(id) {
        return axios.get(`${API_URL}cupons/${id}`);
    },

    create: function(data) {
        return axios.post(`${API_URL}cupons`, data);
    },

    update: function(id, data) {
        return axios.put(`${API_URL}cupons/${id}`, data);
    },

    delete: function(id) {
        return axios.delete(`${API_URL}cupons/${id}`);
    }
};

export default CupomService;
