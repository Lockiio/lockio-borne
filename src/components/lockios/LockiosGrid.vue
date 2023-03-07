<template>
  <div class="flex flex-col">
    <div v-for="lockioArray in lockiosSplit" class="flex flex-row justify-between items-center">
      <div v-for="lockio in lockioArray">
        <lockio-cell
          :lockio="lockio"
          :is-active="selectedLockio.id === lockio.id"
          @lockioSelected="updateSelected(lockio)"
          class="flex flex-col justify-center items-center"
        ></lockio-cell>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType, ref } from "vue";
import { Lockio } from "../../models/models";
import LockioCell from "./LockioCell.vue";

const emit = defineEmits(["lockioSelected"]);

const props = defineProps({
  lockios: {
    type: Array as PropType<Lockio[]>,
    required: true,
  },
});

const lockios = computed(() => props.lockios);

const splitArrays = (array: Lockio[], size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const lockiosSplit = computed(() => splitArrays(lockios.value, 4));

let selectedLockio = ref({} as Lockio);

const updateSelected = (lockio: Lockio) => {
  selectedLockio.value = lockio as Lockio;
  emit("lockioSelected", lockio);
};

</script>
