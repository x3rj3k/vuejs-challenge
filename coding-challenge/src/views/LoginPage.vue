<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="bg-gray-700 flex flex-col w-1/3 py-10 rounded-2xl px-14">
      <h1 class="text-white text-center pb-10">Login</h1>
      <div class="w-full justify-center items-center flex flex-col gap-10">
        <input name="email" type="text" class="h-[45px] w-full rounded-xl pl-5 focus:ring-0 focus:ring-primary-violet outline-none transition ease-out duration-200" placeholder="email" v-model="email" />
        <input name="password" class="h-[45px] w-full rounded-xl pl-5 focus:ring-0 focus:ring-primary-violet outline-none transition ease-out duration-200" type="password" placeholder="password" v-model="password" />
        <p class="text-red-700 text-xl font-bold" v-if="errMessage">{{ errMessage }}</p>
        <button class="px-12 py-4 rounded-lg bg-blue-700 text-white font-bold" @click="login">Submit</button>
      </div>
      <button class="text-white font-bold text-2xl pt-5" @click="signInwithGoogle">Sign in with Google</button>
      <span class="text-white text-lg text-center pt-5">Don't have an Account? <button class="underline font-bold" @click="router.push('/register')">Registere here</button></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router';

const email = ref("")
const password = ref("")
const errMessage = ref()
const router = useRouter()

/**
 * google sign 
 * if success it will redirect to homepage
 */
const signInwithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  try {
    const result = await signInWithPopup(getAuth(), provider)
    if (result) {
      console.log(result.user)
      router.push("/")
    }
  } catch (error) {
    console.log(error)
  }
}

/**
 * login with email and password using firebase signInwithEmailAndPassword
 */
const login = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value).then((data) => {
    console.log('Successfully sign in!')
    router.push('/')
  }).catch((err) => {
    switch(err.code) {
      case "auth/invalid-email":
        errMessage.value = "Invalid Email";
        break
      case "auth/user-not-found":
        errMessage.value = "User Not found"
        break
      case "auth/wrong-password":
        errMessage.value = "Wrong password"
        break
      default:
        errMessage.value = "Incorrect Email or Password"
        break
    }
  })
}
</script>