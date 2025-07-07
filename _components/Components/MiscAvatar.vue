<template>
  <Panel
    header="Avatar"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="grid grid-cols-3 gap-1">
      <div class="flex justify-start">
        <XAvatar label="P" class="mr-2 bg-[#e2e8f0]" size="xlarge" />
        <XAvatar label="V" class="mr-2 mt-2 bg-[#ece9fc] text-[#2a1261]" size="large" />
        <XAvatar label="U" class="mr-2 mt-4 bg-[#dee9fc] text-[#1a2551]" />
      </div>
      <div class="flex justify-center">
        <XAvatarGroup>
          <XAvatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            shape="circle"
          />
          <XAvatar
            image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png"
            shape="circle"
          />
          <XAvatar
            image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png"
            shape="circle"
          />
          <XAvatar
            image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png"
            shape="circle"
          />
          <XAvatar
            image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png"
            shape="circle"
          />
          <XAvatar class="bg-blue-300 text-white" label="+2" shape="circle" />
        </XAvatarGroup>
      </div>
      <div class="flex justify-end">
        <OverlayBadge value="4" severity="info" class="inline-flex">
          <XAvatar class="bg-[#e2e8f0]" label="U" size="xlarge" />
        </OverlayBadge>
      </div>
    </div>
  </Panel>
</template>

<script setup lang="ts"></script>
