<script>
  import { h } from 'vue'
  import ButtonGroup from 'primevue/button';
  export default {
    setup( props, { slots }){
        return () => h(ButtonGroup, props, slots)
    }
  }
</script>