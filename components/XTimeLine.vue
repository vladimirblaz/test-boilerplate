<script>
  import { h } from 'vue'
  import Timeline from 'primevue/timeline';

  export default {
    setup( props, { slots }){
        return () => h(Timeline, props, slots)
    }
  }
</script>