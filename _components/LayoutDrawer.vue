<template>
  <div class="card flex justify-center">
    <XDrawer
      v-model:visible="showDrawer"
      header="Componentes"
      class="block lg:hidden"
      :pt="{
        root: {
          class: 'flex flex-col h-full w-[10px]',
        },
        header: {
          class: 'bg-white text-primary px-4 py-2 border-b border-gray-500',
        },
        content: {
          class: 'pt-4 px-0 bg-white flex-1 overflow-y-auto',
        },
        closeButton: {
          class: 'hover:bg-gray-700 !text-white',
        },
      }"
    >
      <aside class="px-3">
        <LayoutSidebarMenu v-model="showDrawer" />
      </aside>
    </XDrawer>
  </div>
</template>

<script setup lang="ts">
  import LayoutSidebarMenu from "./LayoutSidebarMenu.vue";

  const showDrawer = defineModel<boolean>();
</script>
