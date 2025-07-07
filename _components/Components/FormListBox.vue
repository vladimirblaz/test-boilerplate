<template>
  <Panel
    header="ListBox"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XListbox
        v-model="selectedValue"
        name="ciudadesSD"
        :options="cities"
        multiple
        option-label="name"
        class="w-full md:w-56"
        :rules="[
          (v) => (v && v.length > 0) || 'Selecciona al menos una ciudad',
          (v) => !v || v.length <= 2 || 'Máximo 2 ciudades permitidas',
        ]"
      />
      <div v-if="selectedValue.length" class="p-4 border rounded">
        <div v-for="city in selectedValue" :key="city.code">
          <p>
            Has seleccionado: <strong>{{ city.name }}</strong>
          </p>
          <p>
            Código: <strong>{{ city.code }}</strong>
          </p>
        </div>
      </div>
      <div v-else class="p-4 text-gray-500">
        <p>No hay ciudad seleccionada</p>
      </div>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const selectedValue = ref<{ name: string, code: string }[]>([]);
  const cities = ref([
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ]);
</script>
