<script>
  import { h } from 'vue'
  import StepList from 'primevue/steplist';
  export default {
    setup( props, { slots }){
        return () => h(StepList, props, slots)
    }
  }
</script>