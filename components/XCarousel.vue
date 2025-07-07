<script>
  import { h } from 'vue'
  import Carousel from 'primevue/carousel';
  export default {
    setup( props, { slots }){
        return () => h(Carousel, props, slots)
    }
  }
</script>