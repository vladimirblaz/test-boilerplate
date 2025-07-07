<template>
  <Panel
    header="Rating"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center gap-6">
      <Rating v-model="value" />
      <XRating v-model="value">
        <template #onicon>
          <img
            src="https://primefaces.org/cdn/primevue/images/rating/custom-onicon.png"
            height="24"
            width="24"
          />
        </template>
        <template #officon>
          <img
            src="https://primefaces.org/cdn/primevue/images/rating/custom-officon.png"
            height="24"
            width="24"
          />
        </template>
      </XRating>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const value = ref();
</script>
