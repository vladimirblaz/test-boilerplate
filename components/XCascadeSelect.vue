<template>
  <div class="flex flex-col gap-1">
    <label v-if="props.label" :for="props.label" class="font-medium" :class="{'text-red-500': !! errorMessage}"> 
      <span>{{ props.label }}</span>
      <span v-if="labelRequired" class="text-red-500"> *</span>
    </label>
    <CascadeSelect ref="selectElement" v-bind="$attrs" v-model="value" :name="props.name" :invalid="!!errorMessage"/>
    <Message v-if="errorMessage" severity="error" size="small" variant="simple">{{ errorMessage }}</Message>
  </div>
</template>

<script setup lang="ts">
import { useField, type RuleExpression } from "vee-validate";

const selectElement = ref();

const props = defineProps<{
  modelValue: string | null;
  label?:string,
  name:string,
  rules?: MaybeRef<RuleExpression<string | null | undefined>>;
  labelRequired?:boolean
  validation?: (val: string) => string;
}>();

  const emit = defineEmits<{
    (event: "update:modelValue", modelValue?: string | null): void;
  }>();

  const { value, errorMessage } = useField(props.name || "", props.rules)

  watch(() => props.modelValue , (v: string | null | undefined) => value.value = v)

  watch(value, () => {
    if (props.validation && typeof props.validation === "function") {
      const innerValidation = props.validation;
      nextTick(() => {
        value.value = innerValidation(value.value || "");
      });
    } else {
      emit("update:modelValue", value.value);
    }
  })
  onMounted(() => { if (props.modelValue) value.value = props.modelValue });

</script>