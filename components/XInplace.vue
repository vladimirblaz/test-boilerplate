<script>
import { h } from "vue";
import { Inplace } from 'primevue';

export default {
    setup (props, {slots}) {
        return () => h(Inplace, props, slots)
    }
}
</script>