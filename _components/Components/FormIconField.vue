<template>
  <Panel
    header="IconField"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XIconField>
        <XInputIcon class="pi pi-search" />
        <InputText v-model="inputTextValue" placeholder="Search" />
      </XIconField>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const inputTextValue = ref("");
</script>
