<template>
  <Panel
    header="Tag"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="flex flex-wrap justify-center gap-2">
      <XTag value="Primary"></XTag>
      <XTag severity="secondary" value="Secondary"></XTag>
      <XTag severity="success" value="Success"></XTag>
      <XTag severity="info" value="Info"></XTag>
      <XTag severity="warn" value="Warn"></XTag>
      <XTag severity="danger" value="Danger"></XTag>
      <XTag severity="contrast" value="Contrast"></XTag>
    </div>
  </Panel>
</template>

<script setup lang="ts"></script>
