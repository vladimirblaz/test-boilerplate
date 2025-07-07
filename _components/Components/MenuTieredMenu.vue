<template>
  <Panel
    header="TieredMenu"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XTieredMenu :model="itemsMenu" class="w-full md:w-80" />
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const itemsMenu = ref([
    {
      label: "Documents",
      items: [
        {
          label: "New",
          icon: "pi pi-plus",
        },
        {
          label: "Search",
          icon: "pi pi-search",
        },
      ],
    },
    {
      label: "Profile",
      items: [
        {
          label: "Settings",
          icon: "pi pi-cog",
        },
        {
          label: "Logout",
          icon: "pi pi-sign-out",
        },
      ],
    },
  ]);
</script>
