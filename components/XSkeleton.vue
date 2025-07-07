<script>
    import { h } from "vue";
    import { Skeleton } from "primevue";
    
    export default {
        setup (props, {slots}) {
            return () => h(Skeleton, props, slots);
        }
    }
</script>