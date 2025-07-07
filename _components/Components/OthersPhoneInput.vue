<template>
  <Panel
    header="phoneInput"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <XForm @submit="() => console.log('OK')" @invalid-submit="() => console.log('ERROR')">
      <XPhoneInput v-model="phoneInputNumber" name="phone" label="Numero de Telefono" is-validate />
      <div>{{ inputTextValue }}</div>
      <button type="submit" class="px-3 py-2 bg-slate-100 border border-slate-400 rounded mt-4">
        Enviar
      </button>
    </XForm>
    <p class="text-center">{{ phoneInputNumber }}</p>
    <InputText v-model="phoneInputNumber" class="mt-2" placeholder="Numero de telefono" />
  </Panel>
</template>

<script setup lang="ts">
  const inputTextValue = ref("");
  const phoneInputNumber = ref();
</script>
