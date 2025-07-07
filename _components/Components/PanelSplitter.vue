<template>
  <Panel
    header="Splitter"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card">
      <XSplitter style="height: 300px">
        <SplitterPanel class="flex items-center justify-center" :size="25" :min-size="10">
          Panel 1
        </SplitterPanel>
        <SplitterPanel class="flex items-center justify-center" :size="25" :min-size="10">
          Panel 2
        </SplitterPanel>
      </XSplitter>
    </div>
  </Panel>
</template>

<script setup lang="ts"></script>
