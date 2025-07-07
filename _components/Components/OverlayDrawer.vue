<template>
  <Panel
    header="Drawer"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card">
      <div class="flex gap-2 justify-center">
        <XButton label="Left" @click="visibleLeft = true" />
        <XButton label="Right" @click="visibleRight = true" />
        <XButton label="Top" @click="visibleTop = true" />
        <XButton label="Bottom" @click="visibleBottom = true" />
      </div>

      <XDrawer
        v-model:visible="visibleLeft"
        header="Left Drawer"
        :pt="{ root: { class: 'bg-white' } }"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </XDrawer>

      <XDrawer
        v-model:visible="visibleRight"
        header="Right Drawer"
        position="right"
        :pt="{ root: { class: 'bg-white' } }"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </XDrawer>

      <XDrawer
        v-model:visible="visibleTop"
        header="Top Drawer"
        position="top"
        style="height: auto"
        :pt="{ root: { class: 'bg-white' } }"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </XDrawer>

      <XDrawer
        v-model:visible="visibleBottom"
        header="Bottom Drawer"
        position="bottom"
        style="height: auto"
        :pt="{ root: { class: 'bg-white' } }"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </XDrawer>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const visibleLeft = ref(false);
  const visibleRight = ref(false);
  const visibleTop = ref(false);
  const visibleBottom = ref(false);
</script>
