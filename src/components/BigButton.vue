<template>
  <button class="bg-gray-800 text-white font-bold py-10 px-6 rounded-xl text-4xl">
    {{ props.text }}
  </button>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})

</script>

<style scoped>

button {
  width: 30vw;
  min-height: 50vh;
}
</style>