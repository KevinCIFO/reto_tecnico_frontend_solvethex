<template>
  <div>
    <h1
      class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      Edición de usuarios
    </h1>
    <form @submit.prevent="editarUsuario">
      <div>
        <label
          for="username"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Nombre de usuario</label
        >
        <input
          v-model="user.username"
          type="text"
          id="username"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Kevin"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Email</label
        >
        <input
          v-model="user.email"
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="kevin.larriega@company.com"
          required
        />
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Guardar cambios
      </button>
    </form>
    <button
      @click="volver()"
      type="button"
      class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      Volver
    </button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue"
import ApiService from "../apiService"
import router from "../router"

export default {
  setup() {
    const user = ref({
      username: "",
      email: ""
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
          router.push("/")
        })
        .catch((error) => {
          console.error(error)
        })
    }

    const volver = () => {
      router.push("/")
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