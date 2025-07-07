<script>
  import { h } from 'vue'
  import Tab from 'primevue/tab';
  export default {
    setup( props, { slots }){
        return () => h(Tab, props, slots)
    }
  }
</script>