<template>
  <Panel
    header="ColorPicker"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="flex-1 flex flex-col items-center">
      <label for="cp-hex" class="font-bold block mb-2"> HEX </label>
      <ColorPicker v-model="colorHEX" input-id="cp-hex" format="hex" class="mb-4" />
      <span>{{ colorHEX }}</span>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const colorHEX = ref("6466f1");
</script>
