<script>
  import { h } from 'vue'
  import Card from 'primevue/card';

  export default {
    setup(props, { slots }){
        return () => h(Card, props, slots)
    }
  }

</script>