<template>
  <button
    class="bg-gray-600 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-xl text-2xl disabled:bg-gray-400 disabled:text-gray-500"
    :disabled="disabled"
    @click="useLockio()"
  >
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
import { ButtonAction, Lockio } from "../models/models";
import { computed } from "vue";

const props = defineProps<{
  lockioSelected: Lockio;
  text: string;
  type: ButtonAction;
}>();

const disabled = computed(() => {
  if (props.type === "REMOVE") {
    return props.lockioSelected.status !== "OCCUPIED";
  } else if (props.type === "USE" || props.type === "PRERESERVED") {
    return (
      props.lockioSelected.status !== "AVAILABLE" &&
      props.lockioSelected.status !== "PRERESERVED"
    );
  } else {
    return true;
  }
});

const emit = defineEmits(["useLockio", "showModal"]);

const useLockio = () => {
  if (props.type === "REMOVE") {
    emit("showModal");
  } else if (props.type === "USE") {
    if (props.lockioSelected.status === "AVAILABLE") {
      emit("useLockio");
    } else if (props.lockioSelected.status === "PRERESERVED") {
      emit("showModal");
    }
  }
};
</script>

<style scoped></style>
