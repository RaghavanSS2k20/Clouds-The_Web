import logo from './logo.svg';
import NavBar from './components/Navbar';
import './App.css';
import HeroSection from './components/Herosection';
import FullScreenSection from './components/JoinUsSection';
function App() {
  return (
    <div className="App">
     <NavBar/>
      <HeroSection/>
      <FullScreenSection/>
      
    </div>
  );
}

export default App;
