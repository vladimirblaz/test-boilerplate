<template>
  <Panel
    header="Knob"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XForm @submit="() => console.log('OK')" @invalid-submit="() => console.log('ERROR')">
        <XKnob
          v-model="volumeValue"
          name="volume"
          :min="0"
          :max="100"
          :step="5"
          value-suffix="%"
          :rules="[
                            (v: number | null) => v !== null || 'El campo es requerido',
                            (v: number | null) => v === null || v <= 80 || 'Máximo 80%',
                            (v: number | null) => v === null || v >= 20 || 'Mínimo 20%'
                          ]"
        />
        <!-- Mostrar valor actual -->
        <div class="p-4 border rounded-lg bg-gray-50">
          <p>
            Valor actual: <strong>{{ volumeValue }}%</strong>
          </p>
          <p v-if="lastValidation" class="mt-2 text-sm">
            Última validación:
            <span :class="lastValidation.valid ? 'text-green-600' : 'text-red-600'">
              {{ lastValidation.message }}
            </span>
          </p>
        </div>

        <button type="submit" class="px-3 py-2 bg-slate-100 border border-slate-400 rounded mt-7">
          Enviar
        </button>
      </XForm>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const volumeValue = ref(50);
  const lastValidation = ref<{ valid: boolean; message: string } | null>(null);
</script>
