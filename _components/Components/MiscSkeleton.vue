<template>
  <Panel
    header="Skeleton"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card">
      <div
        class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900"
      >
        <div class="flex mb-4">
          <Skeleton shape="circle" size="4rem" class="mr-2 bg-gray-400"></Skeleton>
          <div>
            <Skeleton width="10rem" class="mb-2 bg-gray-400"></Skeleton>
            <Skeleton width="5rem" class="mb-2 bg-gray-400"></Skeleton>
            <Skeleton height=".5rem" class="bg-gray-400"></Skeleton>
          </div>
        </div>
        <Skeleton width="100%" height="150px" class="bg-gray-400"></Skeleton>
        <div class="flex justify-between mt-4">
          <Skeleton width="4rem" height="2rem" class="bg-gray-400"></Skeleton>
          <Skeleton width="4rem" height="2rem" class="bg-gray-400"></Skeleton>
        </div>
      </div>
    </div>
  </Panel>
</template>

<script setup lang="ts"></script>
