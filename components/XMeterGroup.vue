<script>
  import { h } from 'vue'
  import MeterGroup from 'primevue/metergroup';
  export default {
    setup( props, { slots }){
        return () => h(MeterGroup, props, slots)
    }
  }
</script>