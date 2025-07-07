<template>
  <Panel
    header="MultiSelect"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XForm @submit="() => console.log('OK')" @invalid-submit="() => console.log('ERROR')">
        <XMultiSelect
          v-model="selectedMultiValue"
          :pt="{
            root: { class: 'w-56' },
            overlay: { class: 'bg-white border-none ' },
            option: { class: 'hover:bg-gray-100' },
            optionList: { class: 'bg-white border-none ' },
          }"
          name="city"
          :options="cities"
          option-label="name"
          filter
          placeholder="Select Cities"
          :rules="[
            (val) => !!val || 'La ciudad es requerida',
            (val) => (val && val.length <= 3) || 'Máximo 3 ciudades permitidas',
          ]"
        >
          <template #optiongroup="slotProps">
            <div class="flex items-center">
              <img
                :alt="slotProps.option.label"
                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`"
                style="width: 18px"
              />
              <div>{{ slotProps.option.label }}</div>
            </div>
          </template>
        </XMultiSelect>
        <button type="submit" class="px-3 py-2 bg-slate-100 border border-slate-400 rounded mt-7">
          Enviar
        </button>
      </XForm>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const selectedMultiValue = ref<{ name: string; code: string }[]>([]);
  const cities = ref([
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ]);
</script>
