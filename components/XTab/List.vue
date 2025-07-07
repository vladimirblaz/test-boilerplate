<script>
  import { h } from 'vue'
  import TabList from 'primevue/tablist';
  export default {
    setup( props, { slots }){
        return () => h(TabList, props, slots)
    }
  }
</script>