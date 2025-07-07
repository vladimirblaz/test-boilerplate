<script>
  import { h } from 'vue'
  import Menu from 'primevue/menu';
  export default {
    setup( props, { slots }){
        return () => h(Menu, props, slots)
    }
  }
</script>