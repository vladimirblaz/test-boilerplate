<script>
  import { h } from 'vue'
  import Image from 'primevue/image';
  export default {
    setup( props, { slots }){
        return () => h(Image, props, slots)
    }
  }
</script>