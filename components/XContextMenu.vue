<script>
  import { h } from 'vue'
  import ContextMenu from 'primevue/contextmenu';
  export default {
    setup( props, { slots }){
        return () => h(ContextMenu, props, slots)
    }
  }
</script>