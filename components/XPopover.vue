<script>
  import { h } from 'vue'
  import Popover from 'primevue/popover';
  export default {
    setup( props, { slots }){
      const popoverRef = ref(null);

      expose({
        toggle: (event) => popoverRef.value?.toggle(event)
      });

      return () => h(Popover, { ...props, ref: popoverRef}, slots)
    }
  }
</script>