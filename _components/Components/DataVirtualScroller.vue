<template>
  <Panel
    header="VirtualScroller"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <VirtualScroller
        :items="itemsVirtualScroller"
        :item-size="50"
        class="border border-surface-200 dark:border-surface-700 rounded"
        style="width: 200px; height: 200px"
      >
        <template #item="{ item, options }">
          <div
            :class="[
              'flex items-center p-2',
              { 'bg-surface-100 dark:bg-surface-700': options.odd },
            ]"
            style="height: 50px"
          >
            {{ item }}
          </div>
        </template>
      </VirtualScroller>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const itemsVirtualScroller = ref(Array.from({ length: 100 }).map((_, i) => `Item #${i}`));
</script>
