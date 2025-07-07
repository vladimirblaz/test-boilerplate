<script>
    import { h } from "vue";
    import { PickList } from "primevue";
    
    export default {
        setup (props, {slots}) {
            return () => h(PickList, props, slots);
        }
    }
</script>