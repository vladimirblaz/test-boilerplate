<script>
  import { h } from 'vue'
  import Breadcrumb from 'primevue/breadcrumb';

  export default { 
    setup(props, { slots }){
        return () => h(Breadcrumb, props, slots)
    }
  }
</script>
