<script>
  import { h } from 'vue'
  import Galleria from 'primevue/galleria';

  export default {
    setup( props, { slots }){
        return () => h(Galleria, props, slots)
    }
  }
</script>