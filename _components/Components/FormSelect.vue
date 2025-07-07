<template>
  <Panel
    header="Select"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XForm @submit="() => console.log('OK')" @invalid-submit="() => console.log('ERROR')">
        <XSelect
          v-model="selectedValue"
          name="city"
          label="Ciudad"
          label-required
          :options="cities"
          option-label="name"
          placeholder="Select a City"
          checkmark
          :highlight-on-select="false"
          :rules="[(val) => !!val || 'La ciudad es requerida']"
        />
        <button type="submit" class="px-3 py-2 bg-slate-100 border border-slate-400 rounded mt-7">
          Enviar
        </button>
      </XForm>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const selectedValue = ref<{ name: string; code: string }[]>([]);
  const cities = ref([
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ]);
</script>
