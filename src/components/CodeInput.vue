<template>
  <div class="flex flex-center justify-evenly">
    <form>
      <input
          type="password" pattern="\d{4,4}"
          inputmode="numeric"
          required
          maxlength="4"
          class="text-4xl text-center w-48 h-24 border-2 border-gray-800 rounded-2xl bg-white"
          @input="$emit('updateValue', $event.target.value)"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
defineEmits(["updateValue"]);
</script>
