<template>
  <Panel
    header="ToolTip"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex flex-wrap justify-center gap-2">
      <InputText v-tooltip="'Enter your username'" type="text" placeholder="Right" />
      <InputText v-tooltip.top="'Enter your username'" type="text" placeholder="Top" />
      <InputText v-tooltip.bottom="'Enter your username'" type="text" placeholder="Bottom" />
      <InputText v-tooltip.left="'Enter your username'" type="text" placeholder="Left" />
    </div>
  </Panel>
</template>

<script setup lang="ts"></script>
