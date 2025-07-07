<template>
  <Panel
    header="Autocomplete"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XForm @submit="() => console.log('OK')" @invalid-submit="() => console.log('ERROR')">
        <XAutoComplete
          v-model="autoCompleteValue"
          name="autocomplete"
          :suggestion="['La Paz', 'Cochabamba', 'Santa Cruz']"
          label="AutoComplete"
          label-required
          :rules="[
            (v: any) => !!v || 'El campo es requerido'
          ]"
          :validation="(v: any) => (v || '').replaceAll('a', '')"
        />
        <div>{{ autoCompleteValue }}</div>
        <button type="submit" class="px-3 py-2 bg-slate-100 border border-slate-400 rounded mt-7">
          Enviar
        </button>
      </XForm>
    </div>
  </Panel>
</template>

<script lang="ts" setup>
  const autoCompleteValue = ref(null);
</script>
