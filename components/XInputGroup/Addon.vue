<script>
  import { h } from 'vue'
  import InputGroupAddon from 'primevue/inputgroupaddon';
  export default {
    setup( props, { slots }){
        return () => h(InputGroupAddon, props, slots)
    }
  }
</script>