import { Provider } from 'react-redux';
import '../styles/globals.css';
import store from '../redux/store';
import { createWrapper } from "next-redux-wrapper";

function MyApp({ Component, pageProps, ...props }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>;
}


const makeStore = () => store;

const wrapper = createWrapper(makeStore);


export default wrapper.withRedux(MyApp);
