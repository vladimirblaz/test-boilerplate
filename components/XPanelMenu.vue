<script>
  import { h } from 'vue'
  import PanelMenu from 'primevue/panelmenu';

  export default {
    setup( props, { slots }){
        return () => h(PanelMenu, props, slots)
    }
  }
</script>