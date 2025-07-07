<script>
  import { h } from 'vue'
  import Chip from 'primevue/chip';
  export default {
    setup( props, { slots }){
        return () => h(Chip, props, slots)
    }
  }
</script>