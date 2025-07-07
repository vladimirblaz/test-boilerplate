<template>
  <Panel
    header="SpeedDial"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <p class="m-0">
      <XSpeedDial :model="[{ label: 'Add' }, { label: 'Update' }]" direction="right">
        <template #button="{ toggleCallback }">
          <Button outlined class="border" @click="toggleCallback">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256">
              <path
                fill="currentColor"
                d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12"
              />
            </svg>
          </Button>
        </template>
        <template #item="{ item, toggleCallback }">
          <span class="border p-3" @click="toggleCallback">
            {{ item.label }}
          </span>
        </template>
      </XSpeedDial>
    </p>
  </Panel>
</template>
