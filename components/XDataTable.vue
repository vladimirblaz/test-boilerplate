<script>
    import { h } from "vue";
    import { DataTable  } from "primevue";
    
    export default {
        setup (props, {slots}) {
            return () => h(DataTable , props, slots);
        }
    }
</script>