<template>
  <Panel
    header="SelectButton"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XSelectButton v-model="value" :options="options" />
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const value = ref();
  const options = ref(["One-Way", "Return"]);
</script>
