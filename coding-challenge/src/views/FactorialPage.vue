<template>
  <MainTemplate>
    <div class="w-full min-h-screen flex flex-col items-center gap-7 py-10 bg-blue-500">
      <h1 class="text-white">Factorial</h1>
      <input type="number" class="h-[45px] w-1/3 rounded-xl pl-5 focus:ring-0 focus:ring-primary-violet outline-none transition ease-out duration-200" placeholder="Enter number ..." v-model="input" />
      <button class="text-white font-bold text-xl bg-blue-900 px-10 w-fit py-4 rounded-xl" @click="factorial(input)">Submit</button>
      <span>Result:</span>
      <h2 class="text-white text-5xl"> {{ result }}</h2>
    </div>
  </MainTemplate>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  // components
  import MainTemplate from "@/components/Template.vue"

  const input = ref()
  const result = ref(0)
  const hide = ref(false)

  /**
   * if the numbber is equal to 0 it will return 1
   * else it will get the factorial of the number input
   * @param num - value of number input
   */
  const factorial = (num: number) => {
  if (num === 0) {
    return result.value = 1;
  }
  return result.value =  num * factorial(num - 1);
  }

</script>
<style scoped>
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button
{ 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>