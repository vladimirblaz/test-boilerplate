<script>
  import { h } from 'vue'
  import ToggleSwitch from 'primevue/toggleswitch';
  export default {
    setup( props, { slots }){
        return () => h(ToggleSwitch, props, slots)
    }
  }
</script>