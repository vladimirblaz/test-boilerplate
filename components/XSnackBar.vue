<template>
  <div class="relative pl-9"> 
    <Message :pt="{ closeButton: {class: 'self-start'}, root: {class: 'px-6 py-4'} }" 
    v-bind="$attrs" severity="contrast" variant="simple" class="border-2 border-solid w-full min-h-[81px] h-auto pl-8 py-2">
      <div class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white"
          :class="`${props.bgCircle || 'bg-blue-500'}`"
      >
        <Icon :name="props.icon" :size="props.sizeIcon || '16px'" :class="`${props.classIcon}`"/>
      </div>
      <div class="flex flex-col pl-0">
        <slot></slot>
      </div>
    </Message>
  </div>
</template>
<script setup lang="ts">

const props = defineProps<{
  icon:string;
  sizeIcon?:string;
  bgCircle?:string;
  classIcon?:string;
}>();

</script>