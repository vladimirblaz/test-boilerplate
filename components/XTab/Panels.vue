<script>
  import { h } from 'vue'
  import TabPanels from 'primevue/tabpanels';
  export default {
    setup( props, { slots }){
        return () => h(TabPanels, props, slots)
    }
  }
</script>