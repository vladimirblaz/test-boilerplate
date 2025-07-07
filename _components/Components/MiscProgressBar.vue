<template>
  <Panel
    header="ProgressBar"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card">
      <XProgressBar
        :value="50"
        :pt="{
          root: { class: 'bg-gray-300' },
          value: { class: 'bg-gray-800' },
          label: { class: 'text-white' },
        }"
      ></XProgressBar>
    </div>
  </Panel>
</template>

<script setup lang="ts"></script>
