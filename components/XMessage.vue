<script>
  import { h } from 'vue'
  import Message from 'primevue/message';

  export default {
    setup( props, { slots }){
        return () => h(Message, props, slots)
    }
  }
</script>