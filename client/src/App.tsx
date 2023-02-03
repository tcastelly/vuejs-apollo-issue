import { computed, defineComponent} from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { GET_YEAR, HELLO } from './queries';

export default defineComponent({
  name: 'MyApp',
  setup() {
    const { result: _yr } = useQuery(GET_YEAR);

    const yr = computed(() => _yr.value?.getYear);

    const { result: _msg } = useQuery(HELLO, () => ({
      yr: yr.value,
    }), () => ({
      fetchPolicy: 'no-cache',
      enabled: !!yr.value,
    }));

    const msg = computed(() => _msg.value?.hello || '');

    return () => <span v-text={msg.value} />;
  },
});
