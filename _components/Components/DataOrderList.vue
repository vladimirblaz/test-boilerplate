<template>
  <Panel
    header="OrderList"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="flex justify-center items-center">
      <XOrderList
        v-model="products"
        data-key="id"
        breakpoint="575px"
        :pt="{
          list: { class: 'w-full sm:w-56' },
        }"
      >
        <template #item="{ item }">
          <div class="flex items-center p-2">
            <img
              :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`"
              :alt="item.name"
              class="w-10 h-10 mr-3"
            />
            <div>
              <div class="font-medium">{{ item.name }}</div>
              <div class="text-sm">${{ item.price }}</div>
            </div>
          </div>
        </template>
      </XOrderList>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const products = ref([
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
      inventoryStatus: "OUTOFSTOCK",
      rating: 4,
    },
    {
      id: "1002",
      code: "zz21cz3c1",
      name: "Blue Band",
      description: "Product Description",
      image: "blue-band.jpg",
      price: 79,
      category: "Fitness",
      quantity: 2,
      inventoryStatus: "LOWSTOCK",
      rating: 3,
    },
  ]);
</script>
