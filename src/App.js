import './App.css';
import { Provider } from 'react-redux';
import {store} from './redux/index';
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

function App() {
  // it's master place
  return (
    <Provider store={store}>
    <div className="root">
      <div className="gridContainer">
        <div className="gridPost">
          <Posts />
        </div>
        <div className="gridForm">
          <Form />
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
