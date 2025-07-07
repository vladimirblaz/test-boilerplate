<template>
  <Panel
    header="ToggleButton"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XToggleButton v-model="toggleButtonValue" class="w-24" on-label="On" off-label="Off" />
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const toggleButtonValue = ref(false);
</script>
