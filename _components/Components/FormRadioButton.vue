<template>
  <Panel
    header="RadioButton"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <div class="flex flex-wrap gap-4">
        <div class="flex items-center gap-2">
          <XRadioButton
            v-model="ingredient"
            :pt="{
              box: { class: 'bg-blue-500' },
            }"
            input-id="ingredient4"
            name="pizza"
            value="Tomato"
          />
          <label for="ingredient1">Tomato</label>
        </div>
        <div class="flex items-center gap-2">
          <XRadioButton
            v-model="ingredient"
            :pt="{
              box: { class: 'bg-blue-500' },
            }"
            input-id="ingredient2"
            name="pizza"
            value="Mushroom"
          />
          <label for="ingredient2">Mushroom</label>
        </div>
        <div class="flex items-center gap-2">
          <XRadioButton
            v-model="ingredient"
            :pt="{
              box: { class: 'bg-blue-500' },
            }"
            input-id="ingredient3"
            name="pizza"
            value="Pepper"
          />
          <label for="ingredient3">Pepper</label>
        </div>
      </div>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const ingredient = ref("");
</script>
