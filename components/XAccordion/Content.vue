<script>
  import { h } from 'vue'
  import AccordionContent from 'primevue/accordioncontent';

  export default { 
    setup(props, { slots }){
        return () => h(AccordionContent, props, slots)
    }
  }
</script>