<script>
  import { h } from 'vue'
  import Fluid from 'primevue/fluid';

  export default {
    setup(props, { slots }){
        return () => h(Fluid, props, slots)
    }
  }

</script>