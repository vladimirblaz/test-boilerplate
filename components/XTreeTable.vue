<script>
  import { h } from 'vue'
  import TreeTable from 'primevue/treetable';
  export default {
    setup( props, { slots }){
        return () => h(TreeTable, props, slots)
    }
  }
</script>