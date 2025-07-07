<template>
    <div class="flex flex-col gap-1">
        <label v-if="props.label" :for="props.name" class="font-medium" :class="{ 'text-red-500': !!errorMessage }">
            <span>{{ props.label }}</span>
          <span v-if="labelRequired" class="text-red-500"> *</span>
        </label>
        <Slider 
            v-bind="$attrs" 
            ref="inputElement" 
            v-model="value" 
            :name="props.name" 
            :invalid="!!errorMessage" 
        />
        <Message v-if="errorMessage" severity="error" size="small" variant="simple">{{ errorMessage }}</Message>
    </div>
</template>

<script setup lang="ts">
    import { useField, type RuleExpression } from "vee-validate";

    const props = defineProps<{
        name: string;
        modelValue: number | number[];
        label?: string;
        labelRequired?: boolean;
        rules?: MaybeRef<RuleExpression<number | number[] >>;
        validation?: (val: number| number[]) => number | number[];
    }>();

    const emit = defineEmits<{
        (event: "update:modelValue", modelValue: number | number[]): void; // Elimina null/undefined
    }>();

    const initialValue = Array.isArray(props.modelValue) 
        ? [props.modelValue[0] || 0, props.modelValue[1] || 100] 
        : props.modelValue || 0;
    
    const { value, errorMessage } = useField<number | number[]>(
        props.name,
        props.rules,
        {
            initialValue,
            validateOnValueUpdate: true
        }
    );
    
    // Watchers simplificados
    watch(() => props.modelValue, (newVal) => {
        value.value = newVal;
    });
    
    watch(value, (newVal) => {
        if (props.validation) {
            value.value = props.validation(newVal);
        }
        emit('update:modelValue', newVal);
    });
</script>
