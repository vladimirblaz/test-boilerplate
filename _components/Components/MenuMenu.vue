<template>
  <Panel
    header="Menu"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XMenu
        :model="itemsMenu"
        :pt="{
          item: { class: 'hover:bg-gray-300' },
        }"
      />
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
