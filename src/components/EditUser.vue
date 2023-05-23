<template>
    <div>
      <h1>Crear Usuario</h1>
      <form @submit.prevent="editarUsuario">
        <div>
          <label for="username">Nombre de Usuario:</label>
          <input type="text" id="username" v-model="user.username" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="user.email" required>
        </div>
        <button type="submit">Guardar</button>
      </form>
      <button @click="volver">Volver</button>
    </div>
  </template>

<script lang="ts">
    import { ref } from 'vue';
    import ApiService from '../apiService';
    import router from '../router';

    export default {
        setup() {
            const user = ref({
                username: '',
                email: '',
            })

            const obtenerUsuario = () => {
                const userId = Number(router.currentRoute.value.params.id)

                ApiService.obtenerUsuario(userId)
                    .then((userData) => {
                        user.value = userData
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            }

            const editarUsuario = () => {
                const userId = Number(router.currentRoute.value.params.id)

                ApiService.actualizarUsuario(userId, user.value)
                .then(() => {
                    router.push('/');
                })
                .catch((error) => {
                    console.error(error);
                })
            }

            const volver = () => {
                router.push('/');
            }

            obtenerUsuario()
        
            return {
                user,
                obtenerUsuario,
                editarUsuario,
                volver
            }
        }
    }
</script>