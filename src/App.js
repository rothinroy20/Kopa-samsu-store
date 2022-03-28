import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shope from './components/Shope/Shope';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shope></Shope>
      <Product></Product>
    </div>
  );
}

export default App;