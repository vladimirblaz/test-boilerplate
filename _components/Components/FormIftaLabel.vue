<template>
  <Panel
    header="IftaLabel"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XIftaLabel>
        <XInputText v-model="inputTextValue" name="username" />
        <label for="username">Username</label>
      </XIftaLabel>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const inputTextValue = ref("");
</script>
