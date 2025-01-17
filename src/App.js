import './App.css';
import About from './components/About';
import Header from './components/Header';
import Present from './components/Present';
import Testnomials from './components/Testnomials';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Present/>
      <About/>
      <Testnomials/>
      <Footer/>
    </div>
  );
}

export default App;
