<template>
    <div class="flex flex-col gap-1 items-center">
        <Knob
            v-bind="$attrs"
            v-model="knobValue"
            :name="name"
        />
        <Message v-if="errorMessage" severity="error" size="small" variant="simple">
            {{ errorMessage }}
        </Message>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useField } from 'vee-validate';
import Knob from 'primevue/knob';
import type { MaybeRef } from 'vue';

type ValidationRule = (value: number) => string | boolean;

interface Props {
    name: string;
    modelValue: number;
    rules?: MaybeRef<ValidationRule | ValidationRule[]>;
}

const props = withDefaults(defineProps<Props>(), {
});

const emit = defineEmits<{
    (event: "update:modelValue", value: number): void;
}>();

// Conversion of rules
const normalizedRules = computed(() => {
    if (!props.rules) return undefined;
    
    const rules = Array.isArray(props.rules) 
        ? props.rules 
        : [props.rules];
    
    return (value: number) => {
        for (const rule of rules) {
            const result = typeof rule === 'function' ? rule(value) : rule;
            if (typeof result === 'string') return result;
            if (result === false) return 'Invalid value';
        }
        return true;
    };
});

// Validation typed
const { value: fieldValue, errorMessage } = useField<number>(
    props.name,
    normalizedRules,
    {
        initialValue: props.modelValue,
        validateOnValueUpdate: true
    }
);

const knobValue = computed({
    get: () => props.modelValue,
    set: (value: number) => {
        const numValue = Number(value);
        fieldValue.value = numValue;
        emit('update:modelValue', numValue);
    }
});
</script>