<template>
  <Panel
    header="SplitButton"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card">
      <div class="flex justify-center items-center">
        <XSplitButton
          label="Save"
          :model="items"
          @click="() => console.log('save')"
        />
      </div>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const items = ref([
    {
      label: "Update",
      icon: "pi pi-clock",
    },
    {
      label: "Delete",
      icon: "pi pi-clock",
    },
    {
      label: "Quit",
      icon: "pi pi-clock",
    },
  ]);
</script>
