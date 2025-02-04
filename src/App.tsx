import './App.css';
import Cards  from './components/Features/Cards';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Product_info/Products';



function App() {
  return (
    <section className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Hero/>
      <Cards/>
      <Products/>
      
    </section>
  );
}

export default App;