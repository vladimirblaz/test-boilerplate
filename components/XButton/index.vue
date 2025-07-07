<script>
  import { h } from 'vue'
  import Button from 'primevue/button';
  export default {
    setup( props, { slots }){
        return () => h(Button, props, slots)
    }
  }
</script>