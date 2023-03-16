<template>
  <MainTemplate>
    <div class="bg-blue-500 w-full min-h-screen pb-10">
      <h1 class="text-white text-5xl text-center pt-10">Data Management</h1>
      <div class="w-full flex justify-end p-10">
        <button class="bg-white px-7 py-4 font-bold text-xl rounded-xl" @click="reloadPage">Reload</button>
      </div>
      <ul class="w-full flex justify-between items-center py-2 px-14" v-for="(dummyData, index) in jsonData" :key="index">
        <li class="bg-white w-full p-5">{{ dummyData.API }} </li>
        <span class="bg-gray-300 p-5 cursor-pointer" @click="hideData(index)">Hide</span>
      </ul>
    </div>
  </MainTemplate>
</template>
<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import { take } from 'lodash'
  import { getAuth } from '@firebase/auth';
  import { useRouter } from 'vue-router';
  // components
  import Sidebar from "@/components/Sidebar.vue"
  import MainTemplate from "@/components/Template.vue"

  const jsonData = ref([])
  const router = useRouter()

  /**
   * reload the page
   */
  const reloadPage = () => {
    window.location.reload()
  }

  /**
   * hide the data
   * @param index - set index value of array
   */
  const hideData = (index: number) => {
    return jsonData.value.splice(index, 1)
  }

  /**
   * get the the data
   */
  onMounted(async () => {
    const response = await axios.get('https://api.publicapis.org/entries')
    jsonData.value = take(response.data.entries, 10)
  })
</script>
