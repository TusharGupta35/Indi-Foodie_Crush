import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/MainComponenet';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
