<template>
  <main class="bg-gray-100 min-h-dvh">
    <LayoutHeader />

    <div class="mt-16 flex container mx-auto">
      <aside class="mt-3 shadow overflow-y-auto bg-white rounded-xl p-3 w-[300px] h-[calc(100dvh-6rem)] fixed hidden lg:block">
        <LayoutSidebarMenu />
      </aside>

      <section class="w-full shadow bg-white p-3 mt-3 mb-5 rounded-xl lg:ml-[320px]">
        <slot />
      </section>
    </div>

  </main>
</template>

<script setup lang="ts">
  import LayoutHeader from "./LayoutHeader.vue";
  import LayoutSidebarMenu from "./LayoutSidebarMenu.vue";
</script>
