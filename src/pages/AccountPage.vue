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

<script setup>
import BigButton from "../components/BigButton.vue";
import axios from "axios";
import { API_RASP_URL } from "../utils/constant.ts";

// SWITCH LEDS
const switchLeds = (type) => {
  axios.get(API_RASP_URL + "/led/" + type);
};
</script>

<style scoped></style>
