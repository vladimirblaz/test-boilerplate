<template>
  <Panel
    header="Galleria"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex items-center justify-center">
      <XGalleria :value="images" :num-visible="5" container-style="max-width: 640px">
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
        </template>
      </XGalleria>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const images = ref([
    {
      itemImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg",
      thumbnailImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg",
      thumbnailImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria4s.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg",
      thumbnailImageSrc: "https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
  ]);
</script>
