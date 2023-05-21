<template>
    <div>
      <h1>Lista de Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre de Usuario</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button>Editar</button>
              <button>Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
<script lang="ts">
    import ApiService from '../apiService'

    export default {
        data() {
            return {
            users: [] as any[],
            };
        },
        methods: {
            obtenerUsuarios(this: { users: any[] }) {
            ApiService.obtenerUsuarios()
                .then((users: any[]) => {
                this.users = users;
                })
                .catch((error: Error) => {
                console.error(error);
                // Agrega manejo de error según tus necesidades
                });
            },
        },
        created() {
            this.obtenerUsuarios();
        },
    };
</script>