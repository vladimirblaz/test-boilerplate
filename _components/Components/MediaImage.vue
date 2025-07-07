<template>
  <Panel
    header="Image"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <Image
        src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg"
        alt="Image"
        width="250"
      />
    </div>
  </Panel>
</template>

<script setup lang="ts"></script>
