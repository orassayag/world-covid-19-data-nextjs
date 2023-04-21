import { Provider } from 'react-redux';
import '../assert/css/master.scss';
import store from '../store/store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
