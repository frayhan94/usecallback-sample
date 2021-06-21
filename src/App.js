import {useCallback} from "react";
import Card from './component/card';
import City from './component/city';
import './App.css';
import {useState} from 'react';


const city = [
    'Jakarta',
    'Bekasi',
    'Bogor',
    'Karawang',
    'Sukbaumi'
]


function App() {

  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  // for usecallback
  const [activeCity, setActiveCity] = useState('');


  const onClickCity = useCallback((event) => {
      setActiveCity(event)
  }, [activeCity]);

    /*const onClickCity = (event)  => {
        setActiveCity(event);
    }*/



  return (
    <div className="App">
      <input type={'text'} onChange={(e) => {
        setAddress(e.target.value)
      }} />
      <Card name={name} />
      <input type={'text'} onChange={(e) => {
        setName(e.target.value)
      }}/>
        <City city={city} onClick={onClickCity}/>
        <div>
            Active City
            {activeCity}
        </div>
    </div>
  );
}

export default App;
