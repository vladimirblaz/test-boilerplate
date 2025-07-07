<template>
  <Panel
    header="Slider"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XForm @submit="() => console.log('OK')" @invalid-submit="() => console.log('ERROR')">
        <XSlider
          v-model="valueSlider"
          name="slider"
          class="w-56"
          :rules="[
                              (v: any) => !!v || 'El campo es requerido',
                              (v: any) => v === null || v <= 50 || 'Lo maximo que puede llegar es a 50',
                          ]"
          :pt="{
            root: { class: 'bg-gray-200' },
            handle: { class: 'bg-gray-800' },
          }"
        />

        <button type="submit" class="px-3 py-2 bg-slate-100 border border-slate-400 rounded mt-7">
          Enviar
        </button>
        <p>Valor del Slider: {{ valueSlider }}</p>
      </XForm>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const valueSlider = ref(0);
</script>
