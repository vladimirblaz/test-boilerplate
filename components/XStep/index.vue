<script>
  import { h } from 'vue'
  import Step from 'primevue/step';
  export default {
    setup( props, { slots }){
        return () => h(Step, props, slots)
    }
  }
</script>