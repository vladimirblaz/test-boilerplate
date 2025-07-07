<script>
    import { h } from "vue";
    import { ImageCompare } from "primevue";
    
    export default {
        setup (props, {slots}) {
            return () => h(ImageCompare, props, slots);
        }
    }
</script>