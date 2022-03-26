import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';
import Navbar from './Navbar/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const [guns, setGuns] = useState([]);
  console.log(guns);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className='gun-container'>
        {guns.map((gun) => (
          <Card key={guns.id} gunData={guns} />
        ))}
      </div>

    </div>
  );
}

export default App;
