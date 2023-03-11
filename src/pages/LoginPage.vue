<template>
  <div class="text-4xl font-bold mt-6">
    Veuillez saisir votre numéro de compte :
  </div>
  <div class="mb-16 mt-16">
    <code-input @update-value="(value) => (code = value)"></code-input>
  </div>
  <button
    class="bg-gray-800 text-white font-bold py-4 px-16 rounded-xl text-4xl"
    @click="checkLogin()"
  >
    Valider
  </button>
</template>

<script setup lang="ts">
import CodeInput from "../components/CodeInput.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();

let code = ref(0);

// TODO : connect to BACK and check if user exists. If ok, redirect to Lockios page. If not, redirect to Login page.
const checkLogin = () => {
  router.push({ name: "Lockios" });
};
</script>

<style scoped></style>
