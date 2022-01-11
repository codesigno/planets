import { BrowserRouter } from 'react-router-dom';
import RoutesNavBar from './RoutesNavBar';
import Navbar from './components/Navbar';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <RoutesNavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
