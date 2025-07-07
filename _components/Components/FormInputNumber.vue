<template>
  <Panel
    header="InputNumber"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <XForm @submit="() => console.log('OK')" @invalid-submit="() => console.log('ERROR')">
      <XInputNumber
        v-model="inputNumber"
        label="Input-Number"
        label-required
        name="inputNumber"
        :rules="[
                    (v:any) => !!v || 'El campo es requerido',
                    (v:any) => v<1000 || 'El valor es mayor a 1000'
                ]"
      />
      <button type="submit" class="px-3 py-2 bg-slate-100 border border-slate-400 rounded mt-7">
        Enviar
      </button>
    </XForm>
  </Panel>
</template>

<script setup lang="ts">
  const inputNumber = ref("");
</script>
