<template>
    <div class="flex flex-col gap-1">
      <label v-if="props.label" class="font-medium" :class="{ 'text-red-500': !!errorMessage }">
        <span>{{ props.label }}</span>
        <span v-if="props.labelRequired" class="text-500"> *</span>
      </label>
      <DatePicker v-bind="$attrs" v-model="modelValueDate" :name="props.name" :invalid="!!errorMessage"/>
      <Message v-if="errorMessage" severity="error" size="small" variant="simple">{{ errorMessage }}</Message>
    </div>
</template>
<script setup lang="ts">
  import { useField, type RuleExpression } from "vee-validate";

  const props = defineProps<{
    name: string;
    modelValue: Date | null;
    label?: string;  
    labelRequired?:boolean;
    rules?: MaybeRef<RuleExpression<Date | null | undefined>>;
    validation?: (val: Date) => Date;
  }>();

  const emit = defineEmits<{
    (event: "update:modelValue", modelValue?: Date | null): void;
  }>();

  const { value: modelValueDate , errorMessage, } = useField(props.name || '', props.rules)

  watch(() => props.modelValue, (v: Date | null) => modelValueDate.value = v);
  watch(modelValueDate, (val:(Date | null | undefined)) => {
    try {
      if (val?.getTime() !== props.modelValue?.getTime?.()) {
        emit("update:modelValue", modelValueDate.value);
      }
    } catch (error) {
    }
  });
  onMounted(() => { if (props.modelValue) modelValueDate.value = props.modelValue });

</script>