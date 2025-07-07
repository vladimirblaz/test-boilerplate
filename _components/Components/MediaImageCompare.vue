<template>
  <Panel
    header="ImageCompare"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XImageCompare class="sm:!w-96 shadow-lg">
        <template #left>
          <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
        </template>
        <template #right>
          <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
        </template>
      </XImageCompare>
    </div>
  </Panel>
</template>

<script setup lang="ts"></script>
