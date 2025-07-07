<template>
  <div class="flex flex-col gap-1">
    <label v-if="props.label" :for="props.name" class="font-medium" :class="{ 'text-red-500': !!errorMessage }">
      <span>{{ props.label }}</span>
      <span v-if="props.labelRequired" class="text-red-500"> *</span>
    </label>

    <AutoComplete v-bind="$attrs" ref="inputElement" v-model="inputValue" :inputId="props.name"
      :invalid="!!errorMessage" :suggestions="filteredItems" @complete="searchItems"
      @item-select="handleItemSelect" />

    <Message v-if="errorMessage" severity="error" size="small" variant="simple">
      {{ errorMessage }}
    </Message>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useField, type RuleExpression } from 'vee-validate';
import AutoComplete from 'primevue/autocomplete';

const props = defineProps<{
  name: string;
  modelValue: string | null;
  label?: string;
  labelRequired?: boolean;
  rules?: MaybeRef<RuleExpression<string | null | undefined>>;
  suggestion?: any[];
}>();

const emit = defineEmits<{
  (event: "update:modelValue", value?: string | null): void;
  (event: "item-select", item: any): void;
}>();

const { value: fieldValue, errorMessage } = useField(props.name || "", props.rules);

const inputValue = computed({
  get: () => props.modelValue,
  set: (newValue) => {
    fieldValue.value = newValue;
    emit("update:modelValue", newValue);
  },
});

const inputElement = ref();
const filteredItems = ref<any[]>([]);

const searchItems = (event: { query: string }) => {
  if (!props.suggestion) {
    filteredItems.value = [];
    return;
  }

  const query = event.query.toLowerCase();

  filteredItems.value = props.suggestion.filter(item =>
    String(item).toLowerCase().includes(query)
  );
};

const handleItemSelect = (event: { value: any }) => {
  emit("item-select", event.value);
  emit("update:modelValue", event.value);
};

watch(() => props.modelValue, (newVal) => {
  fieldValue.value = newVal;
});

watch(() => props.suggestion, () => {
  filteredItems.value = [];
}, { deep: true });
</script>
