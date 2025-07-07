<template>
  <Panel
    header="InputOtp"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <XForm @submit="() => console.log('OK')" @invalid-submit="() => console.log('ERROR')">
      <XInputOtp
        v-model="otpValue"
        name="otpCode"
        label="Código OTP"
        label-require
        :rules="[
          (v: any) => !!v || 'El código OTP es requerido',
          (v: any) => (v && v.length === 4) || 'El código debe tener 4 caracteres',
          (v: any) => /^[0-9]*$/.test(v) || 'Solo se permiten números',
        ]"
        :validation="
          (value: any) => {
            return value.replace(/z/gi, '');
          }
        "
      />
      <button type="submit" class="px-3 py-2 bg-slate-100 border border-slate-400 rounded mt-7">
        Enviar
      </button>
    </XForm>
  </Panel>
</template>

<script setup lang="ts">
  const otpValue = ref("");
</script>
