<template>
  <div class="w-full fixed z-10">
    <XMenuBar :pt="{ root: 'border-none bg-white border-b border-gray-500 shadow rounded-t-none rounded-b-xl container mx-auto' }">
      <template #start>
        <XButton class="lg:hidden" @click="showDrawer = !showDrawer">
          <template #icon>
            <Icon name="x:menu" class="text-white" />
          </template>
        </XButton>
        <h1 class="text-xl font-bold text-primary ml-3 lg:ml-0">XCore Components</h1>
      </template>
    </XMenuBar>
  </div>

  <LayoutDrawer v-model="showDrawer" />
</template>

<script lang="ts" setup>
  import LayoutDrawer from "./LayoutDrawer.vue";

  const showDrawer = ref(false);
</script>
