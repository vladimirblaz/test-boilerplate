<template>
  <Panel
    header="Stepper"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <XStepper
      value="1"
      :pt="{
        separator: { class: 'bg-[#C9C2EA]' },
      }"
    >
      <XStepItem value="1">
        <XStep
          :pt="{
            number: { class: 'bg-[#AEA3E0] text-white' },
            root: { class: 'p-0 pl-2' },
          }"
          >Header I</XStep
        >
        <XStepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-48">
            <div
              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
            >
              Content I
            </div>
          </div>
          <div class="py-6">
            <Button label="Next" @click="activateCallback('2')" />
          </div>
        </XStepPanel>
      </XStepItem>
      <XStepItem value="2">
        <XStep :pt="{ number: { class: 'bg-[#AEA3E0] text-white' }, root: { class: 'p-0 pl-2' } }"
          >Header II</XStep
        >
        <XStepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-48">
            <div
              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
            >
              Content II
            </div>
          </div>
          <div class="flex py-6 gap-2">
            <Button label="Back" severity="secondary" @click="activateCallback('1')" />
            <Button label="Next" @click="activateCallback('3')" />
          </div>
        </XStepPanel>
      </XStepItem>
      <XStepItem value="3">
        <XStep :pt="{ number: { class: 'bg-[#AEA3E0] text-white' }, root: { class: 'p-0 pl-2' } }"
          >Header III</XStep
        >
        <XStepPanel v-slot="{ activateCallback }">
          <div class="flex flex-col h-48">
            <div
              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
            >
              Content III
            </div>
          </div>
          <div class="py-6">
            <Button label="Back" severity="secondary" @click="activateCallback('2')" />
          </div>
        </XStepPanel>
      </XStepItem>
    </XStepper>
  </Panel>
</template>

<script setup lang="ts"></script>
