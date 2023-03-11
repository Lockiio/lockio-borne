<template>
  <div class="flex flex-col items-center mt-14">
    <div class="text-4xl font-bold mt-6">
      Votre Lockio (n°{{ props.lockioId }}) est prêt.
    </div>
    <div class="text-2xl font-bold mt-8">
      Votre code : {{ props.lockioCode }}
    </div>
    <div class="text-xl font-bold mt-6 w-1/2 text-center">
      N’oubliez pas de récupérer votre ticket, le code pour déverrouiller votre
      Lockio y est dessus.
    </div>
    <br />
    <button
      class="bg-gray-600 hover:bg-gray-800 mt-8 text-white font-bold py-4 px-16 rounded-xl text-xl"
      @click="$emit('reset')"
    >
      Retourner aux Lockios
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  lockioCode: string;
  lockioId: number;
}>();
</script>
