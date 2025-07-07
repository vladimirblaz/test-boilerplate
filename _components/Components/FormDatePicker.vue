<template>
  <Panel
    header="DatePicker"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XForm @submit="() => console.log('OK')" @invalid-submit="() => console.log('ERROR')">
        <XDatePicker
          v-model="date"
          :pt="{
            calendarContainer: { class: 'bg-white' },
            panel: { class: 'bg-[#f1f1f1]' },
          }"
          label="DatePicker"
          name="datepicker"
          :rules="[
                        (v: any) => !!v || 'El campo es requerido'
                      ]"
          label-required
        />
        <div>{{ date }}</div>
        <button type="submit" class="px-3 py-2 bg-slate-100 border border-slate-400 rounded mt-7">
          Enviar
        </button>
      </XForm>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const date = ref(null);
</script>
