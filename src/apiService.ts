import axios from 'axios'

class ApiService {
    obtenerUsuarios() {
        return axios.get('http://localhost:3000/api/user')
          .then(response => {
            console.log(response.data.data); // Verifica si la respuesta se está recibiendo correctamente
            return response.data.data;
          })
          .catch(error => {
            console.error(error);
            throw error;
          });
      }
}

export default new ApiService();