<template>
    <div>
      <h1>Crear Usuario</h1>
      <form @submit.prevent="crearUsuario">
        <div>
          <label for="username">Nombre de Usuario:</label>
          <input type="text" id="username" v-model="newUser.username" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="newUser.email" required>
        </div>
        <button type="submit">Crear</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <button @click="volver">Volver</button>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  import ApiService from '../apiService';
  import router from '../router';
  
  export default {
    setup() {
      const newUser = ref({
        username: '',
        email: '',
      });
  
      const errorMessage = ref('');
  
      const crearUsuario = () => {
        if (newUser.value.username.toLowerCase() === 'admin') {
          errorMessage.value = 'El nombre de usuario no puede ser admin';
          return;
        }
  
        ApiService.crearUsuario(newUser.value)
          .then(() => {
            router.push('/');
          })
          .catch((error) => {
            errorMessage.value = 'Error al crear el usuario: ' + error.message;
            console.error(error);
          });
      };

      const volver = () => {
        router.push('/');
      };
  
      return {
        newUser,
        errorMessage,
        crearUsuario,
        volver
      };
    },
  };
  </script>  