<script>
  import { h } from 'vue'
  import InputGroup from 'primevue/inputgroup';
  export default {
    setup( props, { slots }){
        return () => h(InputGroup, props, slots)
    }
  }
</script>