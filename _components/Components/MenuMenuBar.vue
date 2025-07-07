<template>
  <Panel
    header="MenuBar"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <XMenuBar :model="MenubarItems" class="px-6 py-4">
      <template #item="{ item, props }">
        <a v-ripple class="flex items-center py-0 px-0" v-bind="props.action">
          <Icon :name="`x:${item.icon}`" />
          <span>{{ item.label }}</span>
        </a>
      </template>
    </XMenuBar>
  </Panel>
</template>

<script setup lang="ts">
  const MenubarItems = ref([
    {
      label: "Home",
      icon: "house",
    },
    {
      label: "Features",
      icon: "house",
    },
    {
      label: "Projects",
      icon: "house",
    },
    {
      label: "Contact",
      icon: "house",
    },
  ]);
</script>
