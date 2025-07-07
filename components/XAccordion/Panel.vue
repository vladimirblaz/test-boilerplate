<script>
  import { h } from 'vue'
  import AccordionPanel from 'primevue/accordionpanel';
  export default {
    setup(props, { slots }){
        return () => h(AccordionPanel, props, slots)
    }
  }
</script>