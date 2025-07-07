<script>
  import { h } from 'vue'
  import Toolbar from 'primevue/toolbar';
  export default {
    setup( props, { slots }){
        return () => h(Toolbar, props, slots)
    }
  }
</script>