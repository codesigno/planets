import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import './css/nav.css';
// import SolarSystem from './components/SolarSystem';
// import Planets from './pages/Planets';
import Header from './components/Header';
import RoutesNavBar from './RoutesNavBar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <SolarSystem /> */}
        {/* <Home /> */}
        {/* <Planets /> */}
        {/* <Navbar /> */}
        <RoutesNavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
