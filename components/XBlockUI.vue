<script>
  import { h } from 'vue'
  import BlockUI from 'primevue/blockui';
  export default {
    setup( props, { slots }){
        return () => h(BlockUI, props, slots)
    }
  }
</script>