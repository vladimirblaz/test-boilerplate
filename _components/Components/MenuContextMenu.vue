<template>
  <Panel
    header="ContextMenu"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="flex flex-col items-center">
      <img
        alt="Logo"
        src="https://primefaces.org/cdn/primevue/images/nature/nature2.jpg"
        class="w-full md:w-[30rem] rounded shadow-lg"
        aria-haspopup="true"
        @contextmenu="onImageRightClick"
      />
      <ContextMenu
        ref="menu"
        :model="itemsContext"
        :pt="{
          root: { class: 'bg-white' },
        }"
      />
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const menu = ref();
  const itemsContext = ref([
    { label: "Copy", icon: "pi pi-copy" },
    { label: "Rename", icon: "pi pi-file-edit" },
  ]);

  const onImageRightClick = (event: unknown) => {
    menu.value.show(event);
  };
</script>
