// import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import SolarSystem from './components/SolarSystem';
import Planets from './pages/Planets';

function App() {
  return (
    <div className="App">
      <SolarSystem />
      <Planets />
      {/* <BrowserRouter>
        <Navbar />
        <RoutesNavBar />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
