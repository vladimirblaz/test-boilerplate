<script>
  import { h } from 'vue'
  import TieredMenu from 'primevue/tieredmenu';

  export default {
    setup( props, { slots }){
        return () => h(TieredMenu, props, slots)
    }
  }
</script>