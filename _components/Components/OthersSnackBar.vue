<template>
  <Panel
    header="SnackBar"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <XSnackBar
      icon="x:check-circle"
      bg-circle="bg-[#E2F7F3]"
      closable
      class="border-[#9EE3D6] mb-4"
      class-icon="text-[#15BB9C] w-[22px] h-[22px]"
    >
      <h2 class="font-bold">Title</h2>
      <p>Content text Lorem ipsum dolor sit amet.</p>
    </XSnackBar>
    <XSnackBar
      icon="x:check-circle"
      bg-circle="bg-[#FDEDEC]"
      closable
      class="border-[#F1948B] mb-4"
      class-icon="text-[#E84C3D] w-[22px] h-[22px]"
    >
      <h2 class="font-bold">Title</h2>
      <p>Content text Lorem ipsum dolor sit amet.</p>
    </XSnackBar>
    <XSnackBar
      icon="x:cancel-circle"
      bg-circle="bg-[#FEF5E7]"
      closable
      class="border-[#F8C46F] mb-4"
      class-icon="text-[#F39C0F] w-[22px] h-[22px]"
    >
      <h2 class="font-bold">Title</h2>
      <p>Content text Lorem ipsum dolor sit amet.</p>
    </XSnackBar>
    <XSnackBar
      icon="x:info-empty"
      bg-circle="bg-[#EBF5FB]"
      closable
      class="border-[#86C1E9] mb-4"
      class-icon="text-[#3698DB] w-[22px] h-[22px]"
    >
      <h2 class="font-bold">Title</h2>
      <p>Content text Lorem ipsum dolor sit amet.</p>
    </XSnackBar>
    <XSnackBar
      icon="x:help-circle"
      bg-circle="bg-[#F3F3F3]"
      closable
      class="border-[#CDCDCD] mb-4"
      class-icon="text-[#686868] w-[22px] h-[22px]"
    >
      <h2 class="font-bold">Title</h2>
      <p>Content text Lorem ipsum dolor sit amet.</p>
    </XSnackBar>
    <XSnackBar
      icon="x:help-circle"
      bg-circle="bg-[#686868]"
      closable
      class="border-[#C1C1C1] mb-4"
      class-icon="text-[#FFFFFF] w-[22px] h-[22px]"
    >
      <h2 class="font-bold">Title</h2>
      <p>Content text Lorem ipsum dolor sit amet.</p>
    </XSnackBar>
  </Panel>
</template>

<script setup lang="ts"></script>
