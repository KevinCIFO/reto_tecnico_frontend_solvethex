import axios from "axios"

interface Usuario {
  username: string
  email: string
}

class ApiService {
  obtenerUsuarios() {
    return axios
      .get("http://localhost:3000/api/user")
      .then((response) => {
        console.log(response.data.data)
        return response.data.data
      })
      .catch((error) => {
        console.error(error)
        throw error
      })
  }
  crearUsuario(usuario: Usuario) {
    return axios
      .post("http://localhost:3000/api/user/create", usuario)
      .then((response) => {
        console.log(response.data)
        return response.data
      })
      .catch((error) => {
        console.error(error)
        throw error
      })
  }
  obtenerUsuario(userId: number) {
    return axios
      .get(`http://localhost:3000/api/user/${userId}`)
      .then((response) => {
        console.log(response.data)
        return response.data
      })
      .catch((error) => {
        console.error(error)
        throw error
      })
  }
  actualizarUsuario(userId: number, usuario: Usuario) {
    return axios
      .put(`http://localhost:3000/api/user/${userId}`, usuario)
      .then((response) => {
        console.log(response.data)
        return response.data
      })
      .catch((error) => {
        console.error(error)
        throw error
      })
  }
  eliminarUsuario(userId: number) {
    return axios
      .delete(`http://localhost:3000/api/user/${userId}`)
      .then((response) => {
        console.log(response.data)
        return response.data
      })
      .catch((error) => {
        console.error(error)
        throw error
      })
  }
}

export default new ApiService()