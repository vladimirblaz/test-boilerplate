<script>
  import { h } from "vue";
  import Panel from 'primevue/panel';

  export default {
    setup(props, { slots }) {
      return () => h(Panel, props, slots)
    }
  };
</script>