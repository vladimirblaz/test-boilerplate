<template>
  <Panel
    id="upload"
    header="Upload"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card">
      <Toast />
      <XFileUpload
        name="demo[]"
        url="/api/upload"
        :multiple="true"
        accept="image/*"
        :max-file-size="1000000"
        @upload="onAdvancedUpload($event)"
      >
        <template #empty>
          <span>Drag and drop files to here to upload.</span>
        </template>
      </XFileUpload>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  function onAdvancedUpload(e: unknown) {
    console.log(e);
  }
</script>
