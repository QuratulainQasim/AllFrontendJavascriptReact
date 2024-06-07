// _app.js
import { Provider } from 'react-redux';
import store from '../redux/store'; // Adjust the path as needed
import CounterComponents from '../counterComponents/counterComponents';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <CounterComponents />
    </Provider>
  );
}

export default MyApp;
