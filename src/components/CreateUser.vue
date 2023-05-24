<template>
  <div>
    <h1
      class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      Creación de usuarios
    </h1>

    <form @submit.prevent="crearUsuario">
      <div>
        <label
          for="username"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Nombre de usuario</label
        >
        <input
          v-model="newUser.username"
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
          v-model="newUser.email"
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
        Crear usuario
      </button>
    </form>
    <div
      v-if="errorMessage"
      class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <span class="font-medium">Error:</span> {{ errorMessage }}
    </div>
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
    const newUser = ref({
      username: "",
      email: ""
    })

    const errorMessage = ref("")

    const crearUsuario = () => {
      if (newUser.value.username.toLowerCase() === "admin") {
        errorMessage.value = "El nombre de usuario no puede ser admin"
        return
      }

      ApiService.crearUsuario(newUser.value)
        .then(() => {
          router.push("/")
        })
        .catch((error) => {
          errorMessage.value = "Error al crear el usuario: " + error.message
          console.error(error)
        })
    }

    const volver = () => {
      router.push("/")
    }

    return {
      newUser,
      errorMessage,
      crearUsuario,
      volver
    }
  }
}
</script>