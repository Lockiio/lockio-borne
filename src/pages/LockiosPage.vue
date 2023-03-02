<template>
  <div
      class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10"
      v-if="showModal"
  >

    <div class="bg-white w-2/5 rounded-xl flex flex-col items-center mb-24 justify-center p-4">
      <div class="flex justify-end rounded-t dark:border-gray-600 w-full mt-0">
        <div>
          <button type="button"
                  @click="showModal = false"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
      </div>
      <div class="text-2xl font-bold mb-6">Code du casier n°{{ lockioSelected.id }}</div>
      <code-input @update-value="(value) => (lockioCode = value)"></code-input>
      <button
          class="bg-gray-600 hover:bg-gray-800 mt-8 text-white font-bold py-4 px-16 rounded-xl text-xl mb-6"
          @click="checkCode(lockioSelected.id)"
      >
        Valider
      </button>
    </div>
  </div>
  <div
      class="flex items-center justify-between w-full h-custom px-12">
    <div class="w-2/3 flex justify-center">
      <locker-grid
        :lockios="lockios"
        @lockioSelected="(lockio) => (lockioSelected = lockio)"
      ></locker-grid>
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
        @click="showModal = true"
      >
        Retirer
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import LockerGrid from "../components/LockerGrid.vue";
import { computed, ref } from "vue";
import { useLockioStore } from "../stores/lockio-store";
import CodeInput from "../components/CodeInput.vue";

const lockioStore = useLockioStore();
lockioStore.fetchLockios();
const lockios = computed(() => lockioStore.lockios);
let lockioSelected = ref({});
let showModal = ref(false);
let lockioCode = ref(0);

const checkCode = (lockioId: number) => {
  showModal.value = true;
  // TODO : call to API with lockioId and lockioCode.value to check if OK
  console.log(lockioId)
  console.log(lockioCode.value)
};
</script>

<style scoped>
.h-custom {
  height: 90vh;
}
</style>
