import { createApp } from 'vue';
import useProvideApolloClient from './compositions/useProvideAppoloClient';
import App from './App';

const app = createApp({
  setup() {
    useProvideApolloClient();

    return () => <App />;
  },
});

app.mount('#app');
