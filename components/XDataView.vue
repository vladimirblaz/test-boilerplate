<script>
    import { h } from "vue";
    import { DataView  } from "primevue";
    
    export default {
        setup (props, {slots}) {
            return () => h(DataView , props, slots);
        }
    }
</script>