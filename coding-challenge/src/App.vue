<template>
  <div>
    <router-view v-slot="{ Component }">
      <component :is="Component" class="mx-auto relative text-light-black" />
    </router-view>
  </div>
</template>

<style scoped>
body {
  background: #fafafd;
}
html {
  scroll-behavior: smooth;
}
</style>
