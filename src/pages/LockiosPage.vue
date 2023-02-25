<template>
  <div class="flex items-center justify-between w-full h-custom px-12">
    <div class="w-1/2 flex justify-center">
      <locker-grid></locker-grid>
    </div>

    <div class="flex flex-col w-1/4">
      <button
        class="bg-gray-600 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-xl text-2xl disabled:bg-gray-400 disabled:text-gray-500"
        :disabled="lockioSelected.status !== 'AVAILABLE'"
      >
        Utiliser
      </button>
      <button
        class="bg-gray-600 hover:bg-gray-800 mt-8 text-white font-bold py-4 px-8 rounded-xl text-2xl disabled:bg-gray-400 disabled:text-gray-500"
        :disabled="lockioSelected.status !== 'OCCUPIED'"
      >
        Retirer
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import LockerGrid from "../components/LockerGrid.vue";
import { ref } from "vue";

const lockios = [
  {
    id: 1,
    status: "AVAILABLE",
  },
  {
    id: 2,
    status: "AVAILABLE",
  },
  {
    id: 3,
    status: "AVAILABLE",
  },
  {
    id: 4,
    status: "AVAILABLE",
  },
  {
    id: 5,
    status: "AVAILABLE",
  },
  {
    id: 6,
    status: "AVAILABLE",
  },
  {
    id: 7,
    status: "AVAILABLE",
  },
  {
    id: 8,
    status: "AVAILABLE",
  },
];
let lockioSelected = ref({});
</script>

<style scoped>
.h-custom {
  height: 90vh;
}
</style>
