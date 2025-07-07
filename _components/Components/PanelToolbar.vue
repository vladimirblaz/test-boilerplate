<template>
  <Panel
    header="Toolbar"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <XToolBar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
      <template #start>
        <div class="flex items-center gap-2">
          <Button label="Files" text plain />
          <Button label="Edit" text plain />
          <Button label="View" text plain />
        </div>
      </template>

      <template #end>
        <div class="flex items-center gap-2">
          <XAvatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            style="width: 32px; height: 32px"
          />
        </div>
      </template>
    </XToolBar>
  </Panel>
</template>

<script setup lang="ts"></script>
