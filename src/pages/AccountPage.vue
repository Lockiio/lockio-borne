<template>
  <div class="text-4xl font-bold mt-6">Avez-vous un compte Lockio ?</div>
  <div class="flex flex-center justify-evenly mt-16">
    <BigButton
      text="Oui, je me connecte"
      @click="$router.push({ name: 'Login' })"
    />
    <BigButton
      text="Non, je continue en tant qu'invité"
      @click="$router.push({ name: 'Lockios' })"
    />
  </div>
</template>

<script setup lang="ts">
import BigButton from "../components/BigButton.vue";
</script>
