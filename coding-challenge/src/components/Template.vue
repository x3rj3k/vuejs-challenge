<template>
  <div class="flex">
    <Sidebar v-if="hide" />
    <div class="w-full flex flex-col">
      <img @click="toogleHide" class="h-14 w-14 cursor-pointer" :src="MenuImage" alt="Menubar"/>
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  // components
  import Sidebar from "@/components/Sidebar.vue"
  //image
  import MenuImage from "@/assets/images/menu.png"

  const hide = ref(false)

  const toogleHide = () => {
    hide.value = !hide.value
  }
</script>
