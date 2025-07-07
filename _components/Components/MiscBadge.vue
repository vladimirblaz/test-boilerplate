<template>
  <Panel
    header="Badge"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="grid grid-cols-3 gap-1">
      <div class="flex justify-start">
        <XBadge value="2"></XBadge>
        <XBadge value="6" severity="secondary"></XBadge>
        <XBadge value="8" severity="success"></XBadge>
        <XBadge value="4" severity="info"></XBadge>
        <XBadge value="9" severity="warn"></XBadge>
        <XBadge value="3" severity="danger"></XBadge>
        <XBadge value="5" severity="contrast"></XBadge>
      </div>
      <div class="flex justify-center">
        <XBadge value="8" size="xlarge" severity="success"></XBadge>
        <XBadge value="6" size="large" severity="warn"></XBadge>
        <XBadge value="4" severity="info"></XBadge>
        <XBadge value="2" size="small"></XBadge>
      </div>
      <div class="flex justify-end">
        <OverlayBadge value="2" severity="warn">
          <XAvatar
            class="p-overlay-badge"
            image="https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg"
            size="xlarge"
          />
        </OverlayBadge>
      </div>
    </div>
  </Panel>
</template>

<script setup lang="ts"></script>
