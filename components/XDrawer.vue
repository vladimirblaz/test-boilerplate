<script>
    import { h } from "vue";
    import { Drawer  } from "primevue";
    
    export default {
        setup (props, {slots}) {
            return () => h(Drawer, props, slots);
        }
    }
</script>