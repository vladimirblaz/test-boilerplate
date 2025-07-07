<template>
  <Panel
    header="BreadCrumb"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <XBreadCrumb
      class="flex flex-col items-center"
      :home="{
        icon: 'pi pi-home',
        label: 'Home Page 123',
      }"
      :model="[
        { label: 'Components' },
        { label: 'Form' },
        { label: 'InputText', route: '/inputtext' },
      ]"
    >
      <template #separator> / </template>
    </XBreadCrumb>
  </Panel>
</template>

<script setup lang="ts"></script>
