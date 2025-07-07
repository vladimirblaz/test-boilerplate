<template>
  <Panel
    header="MeterGroup"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card">
      <XMeterGroup
        :value="MeterGroupValue"
        :pt="{
          meters: { class: 'bg-gray-300' },
        }"
      />
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const MeterGroupValue = ref([
    { label: "Apps", color: "#34d399", value: 16 },
    { label: "Messages", color: "#fbbf24", value: 8 },
    { label: "Media", color: "#60a5fa", value: 24 },
    { label: "System", color: "#c084fc", value: 10 },
  ]);
</script>
