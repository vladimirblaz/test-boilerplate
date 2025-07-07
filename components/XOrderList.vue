<script>
    import { h } from "vue";
    import { OrderList } from "primevue";
    
    export default {
        setup (props, {slots}) {
            return () => h(OrderList, props, slots);
        }
    }
</script>