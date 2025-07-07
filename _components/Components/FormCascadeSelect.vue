<template>
  <Panel
    header="CascadeSelect"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <XForm @submit="() => console.log('OK')" @invalid-submit="() => console.log('ERROR')">
        <XCascadeSelect
          v-model="cascadeSelectValue"
          :pt="{
            root: { class: 'w-56' },
            overlay: { class: 'bg-white border-none ' },
            option: { class: 'hover:bg-gray-100' },
            optionList: { class: 'bg-white border-none ' },
          }"
          name="cascadeSelect"
          label-required
          label="Cascade Select"
          :rules="[
                        (v: any) => !!v || 'El campo es requerido'
                    ]"
          :validation="(v: any) => (v || '').replaceAll('Sydney', '')"
          option-label="cname"
          :options="[
            {
              name: 'Australia',
              code: 'AU',
              states: [
                {
                  name: 'New South Wales',
                  cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' },
                  ],
                },
              ],
            },
          ]"
          :option-group-children="['states', 'cities']"
          option-group-label="name"
          placeholder="Select a City"
        />
        <button type="submit" class="px-3 py-2 bg-slate-100 border border-slate-400 rounded mt-7">
          Enviar
        </button>
      </XForm>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const cascadeSelectValue = ref("");
</script>
