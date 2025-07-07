<script>
  import { h } from 'vue'
  import Tree from 'primevue/tree';

  export default {
    setup( props, { slots }){
        return () => h(Tree, props, slots)
    }
  }
</script>