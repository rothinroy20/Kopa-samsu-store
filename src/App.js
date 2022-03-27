import logo from './logo.svg';
import './App.css';
import Card from './Container/Card/Card';
import Navbar from './Container/Navbar/Navbar';
import { useEffect, useState } from 'react';


function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);

  const handleAddToCart = (gun) => {
    const newCart = [...cart, gun];
    setCart(newCart);
  };

  console.log(guns);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div>
        {
          cart.map(item => (<h1>item.name</h1>)
          )}
      </div>
      <div className='gun-container'>
        {guns.map((gun) => (
          <Card key={guns.id} gunData={gun} handleAddToCart={handleAddToCart} />
        ))}
      </div>
      hello
    </div>
  );
}

export default App;
