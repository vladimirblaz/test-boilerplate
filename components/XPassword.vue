<template>
    <div class="flex flex-col gap-1">
        <label v-if="props.label" :for="props.name" class="font-medium" :class="{ 'text-red-500': !!errorMessage }">
            <span>{{ props.label }}</span>
          <span v-if="labelRequired" class="text-red-500"> *</span>
        </label>
        <Password
            v-bind="$attrs"
            v-model="passwordValue"
            :name="name"
            :invalid="!!errorMessage"
        >
            <template v-for="(_, slot) in $slots" #[slot]="scope">
                <slot :name="slot" v-bind="scope" />
            </template>
        </Password>
        <Message v-if="errorMessage" severity="error" size="small" variant="simple">{{ errorMessage }}</Message>
    </div>
</template>
<script setup lang="ts">
    import { useField, type RuleExpression } from "vee-validate";

    interface Props{
        name: string;
        modelValue:string | null;
        label?:string;
        labelRequired?: boolean;
        rules?: MaybeRef<RuleExpression<string | null | undefined>>;
        validation?: (val: string | null) => string | null;
    }

    const props = defineProps<Props>();
    
    const emit = defineEmits<{
        (event: "update:modelValue", modelValue?: string | null): void;
    }>();


    const { value: fieldValue, errorMessage } = useField(props.name, props.rules, {
        initialValue: props.modelValue
    });

    const passwordValue = computed({
        get: () => props.modelValue,
        set: (value) => {
            const newValue = props.validation ? props.validation(value) : value;
            fieldValue.value = newValue;
            emit('update:modelValue', newValue);
        }
    });
</script>