<template>
  <button
    class="bg-gray-600 h-32 w-32 mr-2 mt-2 rounded-xl disabled:opacity-50"
    :class="{
      available: is('AVAILABLE'),
      occupied: is('OCCUPIED'),
      active: props.isActive,
    }"
    @click="updateSelected(props.lockio)"
    :disabled="!is('AVAILABLE') && !is('OCCUPIED')"
  >
    <div class="text-2xl font-bold">{{ props.lockio.localId }}</div>
    <div class="text-xl mt-2">{{ props.lockio.size }}</div>
  </button>
</template>

<script setup lang="ts">
import { Lockio } from "../../models/models";
import { PropType, ref } from "vue";

const emit = defineEmits(["lockioSelected"]);
const props = defineProps({
  lockio: {
    type: Object as PropType<Lockio>,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

const is = (state: string) => {
  return props.lockio?.status === state;
};

let selectedLockio = ref({} as Lockio);

const updateSelected = (lockio: Lockio) => {
  selectedLockio.value = lockio as Lockio;
  emit("lockioSelected", lockio);
};
</script>

<style scoped>
.available {
  background-color: #6ed26e;
}

.available.active {
  background-color: #6ed26e;
  animation: pulse-available 0.8s infinite alternate;
  box-shadow: darkslateblue 0 0 0 3px;
}

.occupied {
  background-color: #ff7c7c;
}

.occupied.active {
  background-color: #ff7c7c;
  animation: pulse-occupied 0.8s infinite alternate;
  box-shadow: darkslateblue 0 0 0 3px;
}

@keyframes pulse-available {
  0% {
    background-color: #6ed26e;
  }
  100% {
    background-color: #4e984e;
  }
}

@keyframes pulse-occupied {
  0% {
    background-color: #ff7c7c;
  }
  100% {
    background-color: #eb5b5b;
  }
}
</style>
