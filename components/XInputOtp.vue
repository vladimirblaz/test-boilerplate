<template>
    <div class="flex flex-col gap-1">
        <label v-if="props.label" :for="props.name" class="font-medium" :class="{ 'text-red-500': !!errorMessage }">
            <span>{{ props.label }}</span>
            <span v-if="labelRequired" class="text-red-500"> *</span>
        </label>
        <InputOtp
            v-bind="$attrs"
            ref="inputElement"
            v-model="fieldValue" :name="props.name"
            :invalid="!!errorMessage"
        />
        <Message v-if="errorMessage" severity="error" size="small" variant="simple">{{ errorMessage }}</Message>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue';
import { useField, type RuleExpression } from "vee-validate";
import InputOtp from 'primevue/inputotp';
import Message from 'primevue/message';

interface Props {
    name: string;
    modelValue: string | boolean | undefined;
    label?: string;
    labelRequired?: boolean;
    rules?: MaybeRef<RuleExpression< string | boolean | undefined>>;
    validation?: (val:  string | boolean | undefined) =>  string | boolean | undefined;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    (event: "update:modelValue", modelValue?:  string | boolean | undefined): void;
}>();
const {
    value: fieldValue, // Este será el v-model del InputOtp
    errorMessage,
} = useField< string | boolean | undefined>(
    props.name || "",
    props.rules,
    {
        initialValue: props.modelValue,
    }
);

const inputElement = ref(); 

watch(() => props.modelValue, (newVal) => {
    if (fieldValue.value !== newVal) {
        fieldValue.value = newVal;
    }
});

watch(fieldValue, (currentValue) => {
    let processedValue:  string | boolean | undefined = currentValue;
    if (props.validation && typeof props.validation === "function") {
        processedValue = props.validation(currentValue);
        if (processedValue !== currentValue) {
            nextTick(() => {
                fieldValue.value = processedValue;
            });
        }
    }

    if (processedValue !== props.modelValue) {
        emit("update:modelValue", processedValue);
    }
});

onMounted(() => {
    if (props.modelValue !== null) {
        fieldValue.value = props.modelValue;
    }
});
</script>