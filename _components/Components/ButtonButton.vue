<template>
  <Panel
    header="Button"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="grid grid-cols-3 gap-6">
      <div class="flex justify-start">
        <XButtonGroup>
          <XButton label="Save" @click="() => console.log('save')" />
          <XButton label="Delete" @click="() => console.log('delete')" />
          <XButton label="Cancel" @click="() => console.log('cancel')" />
        </XButtonGroup>
      </div>
      <div class="flex justify-center">
        <Button label="Submit" @click="() => console.log('submit')" />
      </div>
      <div class="flex justify-end">
        <Button label="Primary" rounded @click="() => console.log('primary')" />
      </div>
    </div>
  </Panel>
</template>
