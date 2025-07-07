<script>
  import { h } from 'vue'
  import OrganizationChart from 'primevue/organizationchart';

  export default {
    setup( props, { slots }){
        return () => h(OrganizationChart, props, slots)
    }
  }
</script>