import { HashRouter } from 'react-router-dom';
import './css/App.css';
import './css/nav.css';
import Header from './components/Header';
import RoutesNavBar from './RoutesNavBar'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <RoutesNavBar />
      </HashRouter>
    </div>
  );
}

export default App;
