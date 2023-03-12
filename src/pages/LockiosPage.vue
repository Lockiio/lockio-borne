<template>
  <div v-if="!confirmation">
    <div
      class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10"
      v-if="showModal"
    >
      <div
        class="bg-white w-2/5 rounded-xl flex flex-col items-center mb-24 justify-center p-4"
      >
        <modal-closer
          @closeModal="
            showModal = false;
            codeIncorrect = false;
          "
        ></modal-closer>
        <div class="text-2xl font-bold mb-6">
          Code du casier n°{{ lockioSelected.id }}
        </div>
        <code-input
          @update-value="(value) => (lockioCode = value)"
          :code-incorrect="codeIncorrect"
        ></code-input>
        <div v-if="codeIncorrect" class="mt-4 text-red-500 font-bold">
          Code incorrect, veuillez réessayer.
        </div>

        <button
          class="bg-gray-600 hover:bg-gray-800 mt-8 text-white font-bold py-4 px-16 rounded-xl text-xl mb-6"
          @click="checkCode(lockioSelected.id)"
        >
          Valider
        </button>
      </div>
    </div>
    <div class="flex text-4xl mt-16 font-bold w-screen px-12">
      <div v-if="blockStore.block.status === 'AVAILABLE'" class="mr-4">🟢</div>
      <div v-else>🔴</div>
      {{ blockStore.block.name }}
    </div>
    <div class="flex items-center mt-24 justify-between w-full px-12">
      <div class="w-2/3 flex justify-center">
        <locker-grid
          :lockios="lockios"
          @lockioSelected="(lockio) => (lockioSelected = lockio)"
        ></locker-grid>
      </div>

      <div class="flex flex-col w-1/4">
        <lockio-action-button
          :lockio-selected="lockioSelected"
          :text="useButton.text"
          :type="useButton.action"
          @showModal="showModal = true"
          @useLockio="useLockio(lockioSelected.id)"
        >
        </lockio-action-button>
        <lockio-action-button
          class="mt-4"
          :lockio-selected="lockioSelected"
          :text="removeButton.text"
          :type="removeButton.action"
          @showModal="showModal = true"
        >
        </lockio-action-button>
      </div>
    </div>
  </div>
  <div v-else>
    <confirmation-section
      :lockioCode="lockioCode"
      :lockioId="lockioSelected.id"
      @reset="reset()"
    ></confirmation-section>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { API_BACK_URL, BLOCK_ID } from "../utils/constant";

import { computed, ref } from "vue";

import { useLockioStore } from "../stores/lockio-store";
import { useBlockStore } from "../stores/block-store";

import LockerGrid from "../components/lockios/LockiosGrid.vue";
import CodeInput from "../components/CodeInput.vue";
import ConfirmationSection from "../components/ConfirmationSection.vue";
import ModalCloser from "../components/ModalCloser.vue";
import LockioActionButton from "../components/LockioActionButton.vue";
import { ButtonAction } from "../models/models";

const lockioStore = useLockioStore();
lockioStore.fetchLockios();
const blockStore = useBlockStore();
blockStore.fetchBlock();
const lockios = computed(() => lockioStore.lockios);
let lockioSelected = ref({});
let lockioCode = ref(0);
let confirmation = ref(false);
let codeIncorrect = ref(false);

let showModal = ref(false);

const useButton = {
  text: "Utiliser",
  action: "USE" as ButtonAction,
};

const removeButton = {
  text: "Retirer",
  action: "REMOVE" as ButtonAction,
};

const reset = () => {
  lockioStore.fetchLockios();
  lockioSelected.value = {};
  confirmation.value = false;
};

const checkCode = (lockioId: number) => {
  showModal.value = true;
  const lockio = lockioStore.lockios.find((lockio) => lockio.id === lockioId);
  axios
    .patch(API_BACK_URL + "/blocks/" + BLOCK_ID + `/lockios/${lockioId}`, {
      status: lockio?.status,
      code: lockioCode.value,
    })
    .then((response) => {
      lockioStore.fetchLockios();
      if (
        response.data.status === "OCCUPIED" ||
        response.data.status === "PRERESERVED"
      ) {
        codeIncorrect.value = true;
      } else if (response.data.status === "AVAILABLE") {
        codeIncorrect.value = false;
        showModal.value = false;
        lockioCode.value = 0;
        lockioSelected.value = {};
      }
    })
    .catch((error) => {
      codeIncorrect.value = true;
      console.log(error);
    });
};

const useLockio = (lockioId: number) => {
  const lockio = lockioStore.lockios.find((lockio) => lockio.id === lockioId);
  axios
    .patch(API_BACK_URL + "/blocks/" + BLOCK_ID + `/lockios/${lockioId}`, {
      status: lockio?.status,
      code: null,
    })
    .then((response) => {
      confirmation.value = true;
      lockioCode.value = response.data.code;
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
