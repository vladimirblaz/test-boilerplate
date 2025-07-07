<template>
    <div class="flex flex-col gap-1">
        <label v-if="props.label" :for="props.name" class="font-medium" :class="{ 'text-red-500': !!errorMessage }">
            <span>{{ props.label }}</span>
            <span v-if="labelRequired" class="text-red-500"> *</span>
        </label>
        <Textarea 
            v-bind="$attrs" 
            ref="textareaElement" 
            v-model="value" 
            :name="props.name" 
            :invalid="!!errorMessage" />
        <Message v-if="errorMessage" severity="error" size="small" variant="simple">{{ errorMessage }}</Message>
    </div>
</template>

<script setup lang="ts">
import { useField, type RuleExpression } from 'vee-validate';

    const props = defineProps<{
        name: string;
        modelValue: string | null;
        label?: string;
        labelRequired?: boolean;
        rules?: MaybeRef<RuleExpression<string | null | undefined>>;
        validation?: (val:string) => string;
    }>();

    const emits = defineEmits<{
        (event: "update:modelValue", modelValue?: string | null): void;
    }>();

    const { value, errorMessage } = useField(props.name || "", props.rules);

    const textareaElement = ref();

    watch(() => props.modelValue, (v: string | null | undefined) => value.value = v);

    watch(value, () => {
        if (props.validation && typeof props.validation === "function") {
            const start = textareaElement.value.$el.selectionStart;
            const end = textareaElement.value.$el.selectionEnd;
            const innerValidation = props.validation;
            
            nextTick(() => {
                value.value = innerValidation(value.value || "");
                textareaElement.value.$el.setSelectionRange(start, end);
            });
        } else {
            emits("update:modelValue", value.value);
        }

    });
    onMounted(() => { if (props.modelValue) value.value = props.modelValue });
</script>