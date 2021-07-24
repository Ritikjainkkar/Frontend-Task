import './App.css';
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

function App() {
  return (
    <div class="root">
      <div class="gridContainer">
        <div class="gridPost">
          <Posts />
        </div>
        <div class="gridForm">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
