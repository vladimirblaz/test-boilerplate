<script>
    import { h } from "vue";
    import IftaLabel from 'primevue/iftalabel';

    export default {
        setup(props, {slots}){
            return () => h(IftaLabel, props, slots);
        }
    }
</script>