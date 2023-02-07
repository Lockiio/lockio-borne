<template>
  <div class="text-4xl font-bold mt-6">Avez-vous un compte Lockio ?</div>
  <div class="flex flex-center justify-evenly mt-16">
    <BigButton text="Oui, je me connecte" @click="switchLeds('on')" />
    <BigButton
      text="Non, je continue en tant qu'invité"
      @click="switchLeds('off')"
    />
  </div>
</template>

<script setup>
import BigButton from "./components/BigButton.vue";
import axios from "axios";
import { API_RASP_URL } from "./utils/constant.ts";

const switchLeds = (type) => {
  console.log("switchLeds", type);
  axios.get(API_RASP_URL + "/led/" + type);
};
</script>

<style scoped></style>
