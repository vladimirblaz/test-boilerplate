<script>
  import { h } from 'vue'
  import TabPanel from 'primevue/tabpanel';
  export default {
    setup( props, { slots }){
        return () => h(TabPanel, props, slots)
    }
  }
</script>