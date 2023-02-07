<script setup>
import BigButton from "./components/BigButton.vue";
</script>

<template>
  <div class="text-4xl font-bold mt-6">
    Avez-vous un compte Lockio ?
  </div>
  <div class="flex flex-center justify-evenly mt-16">
    <BigButton text="Oui, je me connecte" />
    <BigButton text="Non, je continue en tant qu'invité" />
  </div>
</template>

<style scoped>

</style>
