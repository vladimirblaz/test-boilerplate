<template>
  <Panel
    header="TreeTable"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card">
      <XTreeTable :value="treeSelectValue" table-style="min-width: 50rem">
        <Column field="name" header="Name" expander style="width: 34%"></Column>
        <Column field="size" header="Size" style="width: 33%"></Column>
        <Column field="type" header="Type" style="width: 33%"></Column>
      </XTreeTable>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const treeSelectValue = ref([
    {
      key: "0",
      label: "Documents",
      data: "Documents Folder",
      icon: "pi pi-fw pi-inbox",
      children: [
        {
          key: "0-0",
          label: "Work",
          data: "Work Folder",
          icon: "pi pi-fw pi-cog",
          children: [
            {
              key: "0-0-0",
              label: "Expenses.doc",
              icon: "pi pi-fw pi-file",
              data: "Expenses Document",
            },
            {
              key: "0-0-1",
              label: "Resume.doc",
              icon: "pi pi-fw pi-file",
              data: "Resume Document",
            },
          ],
        },
        {
          key: "0-1",
          label: "Home",
          data: "Home Folder",
          icon: "pi pi-fw pi-home",
          children: [
            {
              key: "0-1-0",
              label: "Invoices.txt",
              icon: "pi pi-fw pi-file",
              data: "Invoices for this month",
            },
          ],
        },
      ],
    },
  ]);
</script>
