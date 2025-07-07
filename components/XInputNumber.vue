<template>
    <div class="flex flex-col gap-1">
        <label v-if="props.label" :for="props.name" class="font-medium" :class="{ 'text-red-500': !!errorMessage }">
            <span>{{ props.label }}</span>
            <span v-if="labelRequired" class="text-red-500"> *</span>
        </label>
        <InputNumber v-bind="$attrs" ref="inputNumberElement" v-model="value" :name="props.name" :invalid="!!errorMessage" />
        <Message v-if="errorMessage" severity="error" size="small" variant="simple">{{ errorMessage }}</Message>
    </div>
</template>
<script lang="ts" setup>
import { useField, type RuleExpression } from 'vee-validate';

 const props = defineProps<{
    modelValue: string | null;
    name: string;
    labelRequired?: boolean;
    label?:string;
    rules?:MaybeRef<RuleExpression<string | null | undefined>>;
    validation?: (val: string) => string;
 }>();

 const emit = defineEmits<{
    (event: "update:modelValue", modelValue?: string | null): void;
 }>();

 const { value, errorMessage } = useField(props.name || '', props.rules)

 const inputNumberElement = ref();

 watch(() => props.modelValue, (v:string | null | undefined) => value.value = v);
 watch(value, () => {
    console.log(value.value)
    if(props.validation && typeof props.validation === "function"){
        const start = inputNumberElement.value.$el.selectionStart;
        const end = inputNumberElement.value.$el.selectionEnd;
        const innerValidation = props.validation;

        nextTick(() => {
            value.value = innerValidation(value.value || "");
            inputNumberElement.value.$el.setSelectionRange(start, end);
        })
    } else {
      emit("update:modelValue", value.value);
    }
 })
</script>