<template>
  <Panel
    header="ToggleSwitch"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XToggleSwitch
        v-model="toggleSwitchValue"
        :pt="{
          slider: { class: 'bg-gray-200' },
          handle: { class: 'bg-gray-500' },
        }"
      />
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const toggleSwitchValue = ref(false);
</script>
