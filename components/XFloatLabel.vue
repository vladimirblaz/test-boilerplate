<script>
    import { h } from "vue";
    import FloatLabel from "primevue/floatlabel";
    
    export default {
        setup(props, {slots}){
            return () => h(FloatLabel, props, slots);
        }
    }
</script>