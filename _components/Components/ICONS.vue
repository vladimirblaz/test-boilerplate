<template>
  <Panel header="Icons">
    <section class="flex justify-center flex-wrap">
      <XButton
        v-for="icon in iconsList"
        :key="icon"
        class="bg-white m-3 border-gray-400 w-[150px] flex-col relative"
        @click="copyEvent(icon)"
      >
        <Icon :name="`x:${icon}`" size="30" />
        <div class="mt-2 text-sm">{{ icon }}</div>
      </XButton>
    </section>

    <Toast />
  </Panel>
</template>

<script setup lang="ts">
  const { data: iconsList } = useFetch<string[]>("/api/icons");
  const { copy } = useClipboard();

  const toast = useToast();

  function copyEvent(icon: string) {
    copy(icon);
    toast.add({ severity: "success", summary: icon, detail: "¡Copiado!", life: 3000 });
  }
</script>
