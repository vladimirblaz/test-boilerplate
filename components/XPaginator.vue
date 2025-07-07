<script>
    import { h } from "vue";
    import { Paginator } from "primevue";
    
    export default {
        setup (props, {slots}) {
            return () => h(Paginator, props, slots);
        }
    }
</script>