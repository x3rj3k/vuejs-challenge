<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="bg-gray-700 flex flex-col w-1/3 py-10 rounded-2xl px-14">
      <h1 class="text-white text-center pb-10">Register</h1>
      <div class="w-full justify-center items-center flex flex-col gap-10">
        <input name="email" type="text" class="h-[45px] w-full rounded-xl pl-5 focus:ring-0 focus:ring-primary-violet outline-none transition ease-out duration-200" placeholder="email" v-model="email" />
        <input name="password" class="h-[45px] w-full rounded-xl pl-5 focus:ring-0 focus:ring-primary-violet outline-none transition ease-out duration-200" type="password" placeholder="password" v-model="password" />
        <button class="px-12 py-4 rounded-lg bg-blue-700 text-white font-bold" @click="register">Register</button>
        <span class="text-white text-lg">Already have an Account? <button class="underline font-bold" @click="router.push('/login')">Login here</button></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router';

const email = ref("")
const password = ref("")

const router = useRouter()

/**
 * register user using createuser in firebase/auth
 */
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value).then((data) => {
    console.log('Successfully Register')
    router.push('/login')
  }).catch((err) => {
    alert(err.message)
  })
}
</script>