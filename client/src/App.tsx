import { computed, defineComponent, ref, watch } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { GET_YEAR, HELLO } from './queries';

export default defineComponent({
  name: 'MyApp',
  setup() {
    const yr = ref();

    const { result: _yr } = useQuery(GET_YEAR);

    const { result: _msg } = useQuery(HELLO, () => ({
      yr: yr.value,
    }), () => ({
      fetchPolicy: 'no-cache',
      enabled: !!yr.value,
    }));

    const msg = computed(() => _msg.value?.hello || '');

    watch(
      () => _yr.value,
      (v) => {
        if (v) {
          yr.value = v.getYear;
        }
      },
    );

    return () => <span v-text={msg.value} />;
  },
});
