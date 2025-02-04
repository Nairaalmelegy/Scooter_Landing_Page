import './App.css';
import Cards  from './components/Features/Cards';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <section className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Hero/>
      <Cards/>
    </section>
  );
}

export default App;