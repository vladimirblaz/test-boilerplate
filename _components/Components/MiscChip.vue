<template>
  <Panel
    header="Chip"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex flex-wrap gap-2">
      <XChip
        class="border border-black"
        label="Amy Elsner"
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
      />
      <XChip
        class="border border-black"
        label="Onyama Limba"
        image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png"
      />
      <XChip class="border border-black py-0 pl-0 pr-4">
        <span
          class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center"
          >P</span
        >
        <span class="ml-2 font-medium">PRIME</span>
      </XChip>
      <XChip
        class="border border-black"
        label="Xuxue Feng"
        image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png"
        removable
      />
    </div>
  </Panel>
</template>

<script setup lang="ts"></script>
