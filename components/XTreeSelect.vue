<script>
  import { h } from 'vue'
  import TreeSelect from 'primevue/treeselect';

  export default {
    setup( props, { slots }){
        return () => h(TreeSelect, props, slots)
    }
  }
</script>