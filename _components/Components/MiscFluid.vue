<template>
  <Panel
    header="Fluid"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <XFluid>
      <span class="font-bold mb-2 block">Fluid Container</span>
      <div class="grid grid-cols-2 gap-4">
        <div><InputText /></div>
        <div><InputText /></div>
        <div class="col-span-full"><InputText /></div>
        <div><InputText :fluid="false" placeholder="Non-Fluid" /></div>
      </div>
    </XFluid>
  </Panel>
</template>

<script setup lang="ts"></script>
