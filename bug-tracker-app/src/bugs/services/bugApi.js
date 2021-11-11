import axios from 'axios';

const serviceEndpoint = 'http://localhost:3030/bugs';

function getAll(){
    return axios.get(serviceEndpoint)
        .then(response => response.data);
}

function getById(id){
    return axios.get(`${serviceEndpoint}/${id}`)
        .then(response => response.data);
}

function save(bugData){
    if (bugData.id === 0){
        return axios.post(serviceEndpoint, bugData)
            .then(response => response.data);
    } else {
        return axios.put(`${serviceEndpoint}/${bugData.id}`, bugData)
            .then(response => response.data);
    }
}

function remove(bugData){
    return axios
        .delete(`${serviceEndpoint}/${bugData.id}`)
        .then(response => response.data);
}

const bugApi = {
    getAll,
    getById,
    save,
    remove
};

export default bugApi;