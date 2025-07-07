<template>
  <Panel
    header="Dialog"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <Button label="Show Dialog" @click="visibleDialog = true" />
      <XDialog
        :visible="visibleDialog"
        modal
        header="Edit Profile"
        :style="{ width: '25rem', backgroundColor: 'white' }"
        @update:visible="visibleDialog = $event"
      >
        <template #header>
          <div class="inline-flex items-center justify-center gap-2">
            <XAvatar
              image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
              shape="circle"
            />
            <span class="font-bold whitespace-nowrap">Amy Elsner</span>
          </div>
        </template>
        <span class="text-surface-500 dark:text-surface-400 block mb-8"
          >Update your information.</span
        >
        <div class="flex items-center gap-4 mb-4">
          <label for="username" class="font-semibold w-24">Username</label>
          <XInputText
            id="username"
            :model-value="inputTextValue"
            class="flex-auto"
            name="username"
            autocomplete="off"
          />
        </div>
        <div class="flex items-center gap-4 mb-2">
          <label for="email" class="font-semibold w-24">Email</label>
          <XInputText
            id="email"
            :model-value="inputTextValue"
            class="flex-auto"
            name="email"
            autocomplete="off"
          />
        </div>
        <template #footer>
          <Button
            label="Cancel"
            text
            severity="secondary"
            autofocus
            @click="visibleDialog = false"
          />
          <Button
            label="Save"
            outlined
            severity="secondary"
            autofocus
            @click="visibleDialog = false"
          />
        </template>
      </XDialog>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const inputTextValue = ref("");
  const visibleDialog = ref(false);
</script>
