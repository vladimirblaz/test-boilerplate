<script>
  import { h } from 'vue'
  import StepItem from 'primevue/stepitem';
  export default {
    setup( props, { slots }){
        return () => h(StepItem, props, slots)
    }
  }
</script>