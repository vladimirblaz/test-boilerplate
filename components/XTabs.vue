<script>
  import { h } from 'vue'
  import Tabs from 'primevue/tabs';
  export default {
    setup( props, { slots }){
        return () => h(Tabs, props, slots)
    }
  }
</script>