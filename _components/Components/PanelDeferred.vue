<template>
  <Panel
    header="Deferred"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div>
      <Toast />
      <XDeferred @load="onImageLoad">
        <img
          src="https://primefaces.org/cdn/primevue/images/nature/nature4.jpg"
          alt="Nature"
          class="rounded-xl w-full md:w-96 block sm:mx-auto"
        />
      </XDeferred>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const toast = useToast();
  
  const onImageLoad = () => {
    console.log("Se cargo la imagen");
    toast.add({
      severity: "success",
      summary: "Image Initialized",
      detail: "The image was rendered successfully ",
      life: 2000,
    });
  };
</script>
