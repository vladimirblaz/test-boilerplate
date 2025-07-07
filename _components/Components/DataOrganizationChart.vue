<template>
  <Panel
    header="OrganizationChart"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card overflow-x-auto">
      <XOrganizationChart :value="orgValue">
        <template #default="slotProps">
          <span>{{ slotProps.node.label }}</span>
        </template>
      </XOrganizationChart>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const orgValue = ref({
    label: "Argentina",
    children: [
      {
        label: "Argentina",
        children: [
          {
            label: "Argentina",
          },
          {
            label: "Croatia",
          },
        ],
      },
      {
        label: "France",
        children: [
          {
            label: "France",
          },
          {
            label: "Morocco",
          },
        ],
      },
    ],
  });
</script>
