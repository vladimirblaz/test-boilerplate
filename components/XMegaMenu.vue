<script>
  import { h } from 'vue'
  import MegaMenu from 'primevue/megamenu';

  export default {
    setup( props, { slots }){
        return () => h(MegaMenu, props, slots)
    }
  }
</script>