<template>
  <Panel
    header="Password"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XPassword
        v-model="passwordValue"
        label="Contraseña"
        label-required
        name="password"
        placeholder="Password"
        fluid
        :rules="[
          (v: any) => !!v || 'La contraseña es requerida',
          (v: any) => /[A-Z]/.test(v) || 'Debe contener al menos una mayúscula',
          (v: any) => /[0-9]/.test(v) || 'Debe contener al menos un número',
        ]"
        :validation="(v) => (v ? v.replace(/\s/g, '') : null)"
        :feedback="false"
        toggle-mask
      />
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const passwordValue = ref("");
</script>
