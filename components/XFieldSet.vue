<script>
  import { h } from "vue";
  import Fieldset from 'primevue/fieldset';

  export default {
    setup(props, { slots }) {
      return () => h(Fieldset, props, slots)
    }
  };
</script>