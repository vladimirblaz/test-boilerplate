<template>
  <Panel
    header="Timeline"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card items-center justify-center">
      <XTimeLine
        :value="timelineValues"
        :pt="{
          eventConnector: { class: 'bg-gray-500' },
        }"
      >
        <template #content="slotProps">
          {{ slotProps.item.status }}
        </template>
      </XTimeLine>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const timelineValues = ref([
    { status: "Ordered", date: "15/10/2020 10:30", icon: "pi pi-shopping-cart", color: "#9C27B0" },
    { status: "Processing", date: "15/10/2020 14:00", icon: "pi pi-cog", color: "#673AB7" },
    { status: "Shipped", date: "15/10/2020 16:15", icon: "pi pi-shopping-cart", color: "#FF9800" },
    { status: "Delivered", date: "16/10/2020 10:00", icon: "pi pi-check", color: "#607D8B" },
  ]);
</script>
