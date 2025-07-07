<template>
  <Panel
    header="BlockUI"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card">
      <div class="mb-4">
        <XButton label="Block" class="mr-2" @click="blocked = true"></XButton>
        <XButton label="Unblock" @click="blocked = false"></XButton>
      </div>
      <XBlockUI :blocked="blocked">
        <XPanel header="Basic">
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </XPanel>
      </XBlockUI>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const blocked = ref(false);
</script>
