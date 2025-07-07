<script>
  import { h } from 'vue'
  import Menubar from 'primevue/menubar';

  export default {
    setup( props, { slots }){
        return () => h(Menubar, props, slots)
    }
  }
</script>