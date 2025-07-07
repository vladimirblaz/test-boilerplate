<template>
  <Panel
    header="Dock"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card">
      <div class="flex flex-wrap gap-4 mb-8">
        <div v-for="pos of positions" :key="pos.label" class="flex items-center">
          <RadioButton v-model="position" :value="pos.value" :input-id="pos.label" name="dock" />
          <label :for="pos.label" class="ml-2"> {{ pos.label }} </label>
        </div>
      </div>
      <div
        class="w-full h-[450px] relative bg-cover bg-no-repeat"
        style="background-image: url('https://primefaces.org/cdn/primevue/images/dock/window.jpg')"
      >
        <XDock :model="itemsDock" :position="position" class="z-[1000]">
          <template #itemicon="{ item }">
            <img v-tooltip.top="item.label" :alt="item.label" :src="item.icon" class="w-full" />
          </template>
        </XDock>
      </div>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const position = ref("bottom");
  const positions = ref([
    {
      label: "Bottom",
      value: "bottom",
    },
    {
      label: "Top",
      value: "top",
    },
    {
      label: "Left",
      value: "left",
    },
    {
      label: "Right",
      value: "right",
    },
  ]);
  const itemsDock = ref([
    {
      label: "Finder",
      icon: "https://primefaces.org/cdn/primevue/images/dock/finder.svg",
    },
    {
      label: "App Store",
      icon: "https://primefaces.org/cdn/primevue/images/dock/appstore.svg",
    },
    {
      label: "Photos",
      icon: "https://primefaces.org/cdn/primevue/images/dock/photos.svg",
    },
    {
      label: "Trash",
      icon: "https://primefaces.org/cdn/primevue/images/dock/trash.png",
    },
  ]);
</script>
