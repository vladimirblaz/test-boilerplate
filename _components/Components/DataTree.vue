<template>
  <Panel
    header="Tree"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center items-center">
      <XTree :value="treeMenu" class="w-full md:w-[30rem]"></XTree>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const treeMenu = ref([
    {
      key: "0",
      label: "Documents",
      icon: "pi pi-fw pi-inbox",
      children: [
        {
          key: "0-0",
          label: "Work",
          icon: "pi pi-fw pi-cog",
        },
        {
          key: "0-1",
          label: "Home",
          icon: "pi pi-fw pi-home",
        },
      ],
    },
  ]);
</script>
