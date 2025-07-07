<template>
  <Panel
    header="FloatLabel"
    :pt="{
      root: { class: 'shadow-xl mb-12 border-none' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center pt-1">
      <XForm @submit="() => console.log('OK')" @invalid-submit="() => console.log('ERROR')">
        <XFloatLabel>
          <XInputText
            id="inputFloatlabel"
            v-model="inputTextValue"
            name="input"
            label="FloatLabel Input"
          />
        </XFloatLabel>
        <br>
        <XFloatLabel>
          <XTextarea
            id="floatlabel"
            v-model="textAreaValue"
            name="textarea"
            label="FloatLabel TextArea"
          />
        </XFloatLabel>
      </XForm>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const inputTextValue = ref("");
  const textAreaValue = ref("");
</script>
