<template>
  <Panel
    header="CheckBox"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="flex justify-center gap-2">
      <XCheckBox v-model="pizza" input-id="ingredient0" name="pizza" value="Cheese" />
      <label for="ingredient0"> Cheese </label>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const pizza = ref(false);
</script>
