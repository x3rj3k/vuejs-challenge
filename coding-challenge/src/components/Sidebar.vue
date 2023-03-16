<template>
  <div class="w-1/2 flex">
    <div class="bg-gray-700 pt-5 w-full">
     <div class="flex flex-col w-full items-center gap-5">
      <!-- if it has photo, if not return icon image -->
      <img class="h-20 w-20" :src="getUser?.photoURL ? getUser?.photoURL : userIcon" alt="User"/>
      <!-- if it has fullname, if not return email address -->
      <span class="text-white font-bold text-xl">{{ getUser?.displayName !== null ? getUser?.displayName : getUser?.email }}</span>
     </div>
     <h2 class="text-white font-bold text-xl px-4 ml-4">Menu</h2>
      <div @click="router.push('/')" class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <span class="text-[15px] ml-4 text-gray-200 font-bold">Data Management</span>
      </div>
      <div @click="router.push('/factorial')" class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <span class="text-[15px] ml-4 text-gray-200 font-bold">Factorial</span>
      </div>
      <div @click="logOut" class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <span class="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed, onMounted, ref, watch } from "vue"
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
  import { useRouter } from "vue-router"
  // image
  import userIcon from "@/assets/images/user-icon.svg?inline"
  import MenuImage from "@/assets/images/menu.png"

  const isLoggedIn = ref(false)
  const hide = ref(false)
  const router = useRouter()
  const getUser = computed(() => getAuth().currentUser)
  let auth

  const toogleHide = () => {
    hide.value = !hide.value
  }

  /**
   * check if the user is login or not
   */
  onMounted(() => {
    auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      user ? (isLoggedIn.value = true) : (isLoggedIn.value = false)
    })
  })

  /**
   * logout user then redirect to login page
   */
  const logOut = () => {
    signOut(auth).then(() => {
      router.push("/login")
    })
  }

</script>