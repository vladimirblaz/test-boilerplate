<script>
    import { h } from "vue";
    import { Badge } from "primevue";
    
    export default {
        setup (props, {slots}) {
            return () => h(Badge, props, slots);
        }
    }
</script>