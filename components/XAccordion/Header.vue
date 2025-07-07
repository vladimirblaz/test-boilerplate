<script>
  import { h } from 'vue'
  import AccordionHeader from 'primevue/accordionheader';

  export default {
    setup(props, { slots }){
        return () => h(AccordionHeader, props, slots)
    }
  }
</script>