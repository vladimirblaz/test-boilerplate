<script>
  import { h } from 'vue'
  import Accordion from 'primevue/accordion';
  export default {
    setup( props, { slots }){
        return () => h(Accordion, props, slots)
    }
  }
</script>
