<script>
  import { h } from "vue";
  import SpeedDial from "primevue/speeddial";

  export default {
    setup(props, { slots }) {
      return () => h(SpeedDial, props, slots)
    }
  };
</script>
