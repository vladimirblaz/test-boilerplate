<script>
  import { h } from 'vue'
  import StepPanel from 'primevue/steppanel';
  export default {
    setup( props, { slots }){
        return () => h(StepPanel, props, slots)
    }
  }
</script>