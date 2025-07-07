<template>
  <Panel
    header="ProgressSpinner"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XProgressSpinner />
    </div>
  </Panel>
</template>

<script setup lang="ts"></script>
