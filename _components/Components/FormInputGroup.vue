<template>
  <Panel
    header="InputGroup"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="flex flex-col-2 gap-4">
      <XInputGroup>
        <XInputGroupAddon>
          <i class="pi pi-user" />
        </XInputGroupAddon>
        <InputText v-model="text1" placeholder="Username" />
      </XInputGroup>

      <XInputGroup>
        <XInputGroupAddon>$</XInputGroupAddon>
        <InputNumber v-model="number" placeholder="Price" />
        <XInputGroupAddon>.00</XInputGroupAddon>
      </XInputGroup>

      <XInputGroup>
        <XInputGroupAddon>www</XInputGroupAddon>
        <InputText v-model="text2" placeholder="Website" />
      </XInputGroup>

      <XInputGroup>
        <XInputGroupAddon>
          <i class="pi pi-map" />
        </XInputGroupAddon>
        <Select v-model="selectedCity" :options="cities" option-label="name" placeholder="City" />
      </XInputGroup>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const text1 = ref(null);
  const text2 = ref(null);
  const number = ref(null);
  const selectedCity = ref();
  const cities = ref([
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ]);
</script>
