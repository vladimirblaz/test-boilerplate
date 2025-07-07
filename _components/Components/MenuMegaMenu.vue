<template>
  <Panel
    header="MegaMenu"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <XMegaMenu :model="itemsMegaMenu" :pt="{ overlay: { class: 'bg-white' } }" />
  </Panel>
</template>

<script setup lang="ts">
  const itemsMegaMenu = ref([
    {
      label: "Furniture",
      icon: "pi pi-box",
      items: [
        [
          {
            label: "Living Room",
            items: [
              { label: "Accessories" },
              { label: "Armchair" },
              { label: "Coffee Table" },
              { label: "Couch" },
              { label: "TV Stand" },
            ],
          },
        ],
        [
          {
            label: "Kitchen",
            items: [{ label: "Bar stool" }, { label: "Chair" }, { label: "Table" }],
          },
          {
            label: "Bathroom",
            items: [{ label: "Accessories" }],
          },
        ],
        [
          {
            label: "Bedroom",
            items: [
              { label: "Bed" },
              { label: "Chaise lounge" },
              { label: "Cupboard" },
              { label: "Dresser" },
              { label: "Wardrobe" },
            ],
          },
        ],
        [
          {
            label: "Office",
            items: [
              { label: "Bookcase" },
              { label: "Cabinet" },
              { label: "Chair" },
              { label: "Desk" },
              { label: "Executive Chair" },
            ],
          },
        ],
      ],
    },
    {
      label: "Electronics",
      icon: "pi pi-mobile",
      items: [
        [
          {
            label: "Computer",
            items: [
              { label: "Monitor" },
              { label: "Mouse" },
              { label: "Notebook" },
              { label: "Keyboard" },
              { label: "Printer" },
              { label: "Storage" },
            ],
          },
        ],
        [
          {
            label: "Home Theater",
            items: [{ label: "Projector" }, { label: "Speakers" }, { label: "TVs" }],
          },
        ],
        [
          {
            label: "Gaming",
            items: [
              { label: "Accessories" },
              { label: "Console" },
              { label: "PC" },
              { label: "Video Games" },
            ],
          },
        ],
        [
          {
            label: "Appliances",
            items: [
              { label: "Coffee Machine" },
              { label: "Fridge" },
              { label: "Oven" },
              { label: "Vaccum Cleaner" },
              { label: "Washing Machine" },
            ],
          },
        ],
      ],
    },
  ]);
</script>
