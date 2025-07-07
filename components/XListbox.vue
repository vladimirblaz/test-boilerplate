<template>
  <div class="flex flex-col gap-1">
    <Listbox
      v-bind="$attrs"
      v-model="selectedValue"
      :name="props.name"
      :invalid="!!errorMessage"
    />
    <Message v-if="errorMessage" severity="error" size="small" variant="simple">
      {{ errorMessage }}
    </Message>
  </div>
</template>

<script setup lang="ts">
import { useField, type RuleExpression } from "vee-validate";

const props = defineProps <{
  name: string;
  modelValue: any;
  rules?: MaybeRef<RuleExpression<string | null | undefined>>;
}>();


const emit = defineEmits<{
    (event: "update:modelValue", modelValue?: string | null): void;
}>();

// Validación
const { value: fieldValue, errorMessage } = useField(props.name, props.rules, {
  initialValue: props.modelValue
});

// Valor seleccionado
const selectedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    fieldValue.value = value;
    emit('update:modelValue', value);
  }
});
</script>