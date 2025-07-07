<template>
  <Form autocomplete="off">
    <slot />
  </Form>
</template>

<script lang="ts" setup>
  import { Form } from "vee-validate";
</script>
