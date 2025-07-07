<template>
    <div class="flex flex-col gap-1">
        <label v-if="props.label" :for="props.name" class="font-medium" :class="{ 'text-red-500': !!errorMessage }">
            <span>{{ props.label }}</span>
            <span v-if="labelRequired" class="text-red-500"> *</span>
        </label>
        <Select
            v-bind="$attrs"
            v-model="selectedValue"
            :name="props.name" 
            :invalid="!!errorMessage" />
        <Message v-if="errorMessage" severity="error" size="small" variant="simple">{{ errorMessage }}</Message>
    </div>
</template>

<script setup lang="ts">
    import { useField, type RuleExpression } from "vee-validate";

    const props = defineProps<{
        name: string;
        modelValue: any;
        label?: string;
        labelRequired?: boolean;
        rules?: MaybeRef<RuleExpression<string | null | undefined>>;
    }>();

    const emit = defineEmits<{
        (event: "update:modelValue", modelValue?: string | null): void;
    }>();

    // Validator
    const { value: fieldValue, errorMessage } = useField(props.name, props.rules, {
        initialValue: props.modelValue,
        validateOnValueUpdate: true
    });

    // selected Value
    const selectedValue = computed({
        get: () => props.modelValue,
        set: (value) => {
            fieldValue.value = value;
            emit('update:modelValue', value);
        }
    });
</script>
