<template>
  <div class="flex flex-col gap-1">
    <label v-if="props.label" :for="props.name" class="font-medium" :class="{ 'text-red-500': !!errorMessage }">
      <span>{{ props.label }}</span>
      <span v-if="labelRequired" class="text-red-500"> *</span>
    </label>
    <InputMask v-bind="$attrs" ref="inputElement" v-model="value" :name="props.name" :invalid="!!errorMessage" :mask="props.mask" :placeholder="props.placeholder" />
    <Message v-if="errorMessage" severity="error" size="small" variant="simple">{{ errorMessage }}</Message>
  </div>
</template>

<script setup lang="ts">
  import { useField, type RuleExpression } from "vee-validate";

  const props = defineProps<{
    name: string;
    modelValue: Number | null ;
    mask: string;
    placeholder: string;
    label?: string;
    labelRequired?: boolean;
    rules?: MaybeRef<RuleExpression<string | null | undefined>>;
    validation?: (val: number) => number;
  }>();

  const emit = defineEmits<{
    (event: "update:modelValue", modelValue?: string | null): void;
  }>();



  // Validator (validation by rules)
  const { value, errorMessage } = useField(props.name || "", props.rules);



  // Validations (masks and other validations using replacements)
  const inputElement = ref();

  watch(() => props.modelValue, (v: string | null | undefined) => value.value = v);
  watch(value, () => {
    if (props.validation && typeof props.validation === "function") {
      const start = inputElement.value.$el.selectionStart;
      const end = inputElement.value.$el.selectionEnd;
      const innerValidation = props.validation;

      nextTick(() => {
        value.value = innerValidation(value.value || "");
        inputElement.value.$el.setSelectionRange(start, end);
      });
    } else {
      emit("update:modelValue", value.value);
    }

  });
  onMounted(() => { if (props.modelValue) value.value = props.modelValue });
</script>