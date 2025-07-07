<script>
  import { h } from 'vue'
  import Dock from 'primevue/dock';
  export default {
    setup( props, { slots }){
        return () => h(Dock, props, slots)
    }
  }
</script>