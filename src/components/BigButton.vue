<template>
  <button class="bg-gray-800 text-white font-bold py-10 px-6 rounded-xl text-5xl">
    {{ props.text }}
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  }
})

</script>

<style scoped>

button {
  width: 360px;
  height: 460px;
}
</style>