<script>
  import { h } from 'vue'
  import StepPanels from 'primevue/steppanels';
  export default {
    setup( props, { slots }){
        return () => h(StepPanels, props, slots)
    }
  }
</script>