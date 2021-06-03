import AppRouter from './Router';
import Store from './Store'
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={Store}>
    <AppRouter></AppRouter>
  </Provider>
)

export default App;