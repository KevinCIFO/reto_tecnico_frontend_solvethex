<template>
  <div>
    <h1>Lista de Usuarios</h1>
    <button @click="crearUsuario">Crear Usuario</button>
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
            <button @click="editarUsuario(user.id)">Editar</button>
            <button @click="modalEliminar(user)">Eliminar</button>
            <button @click="modalDetalles(user)">Detalles</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal para eliminar usuario -->
    <Modal v-if="isShowModalEliminar" @close="closeModalEliminar">
      <template #header>
        <div class="flex items-center text-lg">
          Modal de confirmación
        </div>
      </template>

      <template #body>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          ¿Estás seguro de que quieres eliminar a este usuario?
        </p>
      </template>

      <template #footer>
        <div class="flex justify-between">
          <button @click="closeModalEliminar" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            No, cancelar
          </button>
          <button @click="eliminarUsuario(); closeModalEliminar()" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
            Sí, estoy seguro
          </button>
        </div>
      </template>
    </Modal>

    <!-- Modal para mostrar los detalles del usuario -->
    <Modal v-if="isShowModalDetalles" @close="closeModalDetalles">
      <template #header>
        <div class="flex items-center text-lg">
          Detalles del Usuario
        </div>
      </template>

      <template #body>
        <div>
          <p><strong>ID:</strong> {{ userDetails?.id }}</p>
          <p><strong>Nombre de Usuario:</strong> {{ userDetails?.username }}</p>
          <p><strong>Email:</strong> {{ userDetails?.email }}</p>
        </div>
      </template>

      <template #footer>
        <div class="flex justify-end">
          <button @click="closeModalDetalles" type="button" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
            Cerrar
          </button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import ApiService from '../apiService'
import router from '../router'
import { Modal } from 'flowbite-vue'

interface User {
  id: number
  username: string
  email: string
}

export default {
  components: {
    Modal
  },
  setup() {
    const isShowModalEliminar = ref(false)
    const isShowModalDetalles = ref(false)
    const userToDelete = ref<number | null>(null)
    const userDetails = ref<User | null>(null)

    const closeModalEliminar = () => {
      isShowModalEliminar.value = false
      userToDelete.value = null
    }

    const closeModalDetalles = () => {
      isShowModalDetalles.value = false
      userDetails.value = null
    }

    const modalEliminar = (user: User) => {
      userToDelete.value = user.id
      isShowModalEliminar.value = true
    }

    const modalDetalles = (user: User) => {
      userDetails.value = user
      isShowModalDetalles.value = true
    }

    const users = ref([] as any[])

    const obtenerUsuarios = () => {
      ApiService.obtenerUsuarios()
        .then((usersData: any[]) => {
          users.value = usersData
        })
        .catch((error: Error) => {
          console.error(error)
        })
    }

    const crearUsuario = () => {
      router.push('/create')
    }

    const editarUsuario = (userId: number) => {
      router.push(`/edit/${userId}`)
    }
    
    const eliminarUsuario = () => {
      const userId = userToDelete.value

      if (userId) {
        ApiService.eliminarUsuario(userId)
          .then(() => {
            obtenerUsuarios()
            closeModalEliminar()
          })
          .catch((error) => {
            console.error(error)
          })
      }
    }

    obtenerUsuarios()

    return {
      users,
      crearUsuario,
      editarUsuario,
      isShowModalEliminar,
      isShowModalDetalles,
      closeModalEliminar,
      closeModalDetalles,
      modalEliminar,
      modalDetalles,
      eliminarUsuario,
      userDetails
    };
  }
};
</script>