<template>
  <div class="flex flex-center justify-evenly">
    <input
      type="password"
      required
      maxlength="4"
      class="text-4xl text-center w-48 h-24 border-2 border-gray-800 rounded-2xl bg-white"
      @input="$emit('updateValue', $event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
defineEmits(["updateValue"]);
</script>
