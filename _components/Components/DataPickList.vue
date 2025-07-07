<template>
  <Panel
    header="PickList"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card">
      <XPickList v-model="productsList" data-key="id" breakpoint="1400px">
        <template #option="{ option }">
          <div class="flex items-center">
            <img
              :src="`https://primefaces.org/cdn/primevue/images/product/${option.image}`"
              :alt="option.name"
              class="w-10 h-10 mr-3"
            />
            <div>
              <div class="font-medium">{{ option.name }}</div>
              <div class="text-sm text-gray-500">${{ option.price }}</div>
            </div>
          </div>
        </template>
      </XPickList>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const productsList = ref([
    [
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5,
      },
      {
        id: "1001",
        code: "nvklal433",
        name: "Black Watch",
        description: "Product Description",
        image: "black-watch.jpg",
        price: 72,
        category: "Accessories",
        quantity: 61,
        inventoryStatus: "INSTOCK",
        rating: 4,
      },
    ],
    [], // Lista vacía para el destino
  ]);
</script>
