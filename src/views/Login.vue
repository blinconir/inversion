<template>
    <section class="bg-blue-100 text-[#003D80] dark:bg-gray-900 h-screen">
      <div class="flex flex-col items-center justify-center md:h-screen pt-20 md:pt-0 px-6 md:px-0">
        <span class="flex items-center mb-6 text-lg font-semibold text-gray-900 dark:text-white">
          <img
            class="w-32 h-32 mr-2"
            src="../assets/subtrab_logo.png"
            alt="Logo Subsecretaría del Trabajo"
          />
        </span>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-[#003D80] md:text-2xl dark:text-white">
              Ingresar
            </h1>
            <form class="space-y-4 md:space-y-6" @submit.prevent="auth">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-[#003D80] dark:text-white">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-[#003D80] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="nombre@ejemplo.com"
                  required
                  v-model="email"
                  autocomplete="on"
                  autofocus
                />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-[#003D80] dark:text-white">
                  Contraseña
                </label>
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-[#003D80] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div class="flex items-center justify-between">
                <!-- Funcionalidad de recordar sesión comentada -->
                <!-- <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      v-model="remember"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500 dark:text-gray-300">Mantener sesión abierta</label>
                  </div>
                </div> -->
                <!-- <router-link to="/olvide-contrasena" class="text-sm text-primary-600 hover:underline dark:text-primary-500 font-light">
                  ¿Olvidaste tu contraseña?
                </router-link> -->
              </div>
              <button
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Ingreso al Sistema
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { login } from "../functions/login";
  
  const email = ref("");
  const password = ref("");
  
  // Ingreso
  const auth = () => {
    login(email.value, password.value);
  };
  </script>
  