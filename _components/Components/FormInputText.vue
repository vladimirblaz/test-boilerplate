<template>
  <Panel
    header="InputText"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <XForm @submit="() => console.log('OK')" @invalid-submit="() => console.log('ERROR')">
      <XInputText
        v-model="inputTextValue"
        name="input"
        label="Input"
        label-required
        :rules="[
                      (v: any) => !!v || 'El campo es requerido'
                    ]"
        :validation="(v: any) => (v || '').replaceAll('a', '')"
      />

      <div>{{ inputTextValue }}</div>

      <button type="submit" class="px-3 py-2 bg-slate-100 border border-slate-400 rounded mt-7">
        Enviar
      </button>
    </XForm>
  </Panel>
</template>

<script setup lang="ts">
  const inputTextValue = ref("");
</script>
