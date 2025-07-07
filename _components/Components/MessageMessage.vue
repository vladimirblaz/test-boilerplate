<template>
  <Panel
    id="message"
    header="Message"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex flex-wrap gap-4 justify-center">
      <XMessage severity="success">Success Message</XMessage>
      <XMessage severity="info">Info Message</XMessage>
      <XMessage severity="warn">Warn Message</XMessage>
      <XMessage severity="error">Error Message</XMessage>
      <XMessage severity="secondary">Secondary Message</XMessage>
      <XMessage severity="contrast">Contrast Message</XMessage>
    </div>
  </Panel>
</template>

<script setup lang="ts"></script>
