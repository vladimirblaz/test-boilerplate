<template>
  <Panel
    header="Inplace"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XInplace>
        <template #display>
          {{ inputTextValue || "Click to Edit" }}
        </template>
        <template #content="{ closeCallback }">
          <span class="inline-flex items-center gap-2">
            <XInputText v-model="inputTextValue" autofocus name="input" label="Inplace" />
            <Button icon="pi pi-times" text severity="danger" @click="closeCallback" />
          </span>
        </template>
      </XInplace>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const inputTextValue = ref("");
</script>
