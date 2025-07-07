<script>
  import { h } from 'vue'
  import VirtualScroller from 'primevue/virtualscroller';

  export default {
    setup(props, { slots }){
        return () => h(VirtualScroller, props, slots)
    }
  }

</script>