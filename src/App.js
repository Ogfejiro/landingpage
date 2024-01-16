import './App.css';
import Navbar from './components/Navbar';
import { Second } from './components/Second';
import { Plan } from './components/Plan';
import {World} from './components/World'
import Footer from './components/Footer';




function App() {
  return (
    <div className="">
    <Navbar/>
   <Second/>
   <Plan/>
   <World/>
   <Footer/>
        
    </div>
  );
}

export default App;
