<script>
  import { h } from 'vue'
  import Rating from 'primevue/rating';

  export default {
    setup(props, { slots }){
        return () => h(Rating, props, slots)
    }
  }
</script>