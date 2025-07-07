<script>
import { h } from "vue";
import { Dialog } from 'primevue';

export default {
    setup (props, {slots}) {
        return () => h(Dialog, props, slots);
    }
}
</script>
