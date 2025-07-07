<script>
    import { h } from "vue";
    import { OverlayBadge } from "primevue";
    
    export default {
        setup (props, {slots}) {
            return () => h(OverlayBadge, props, slots);
        }
    }
</script>