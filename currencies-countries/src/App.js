import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [arrCurrencies, setArrCurrencies] = useState([]);

  async function getCurrencies() {
    const response = await axios.get('https://www.nbrb.by/API/ExRates/Currencies');
    setArrCurrencies(response.data);
  }

  useEffect(() => {
    getCurrencies()
  }, [])

  const resultHTML = arrCurrencies.map((el) => {
    return <p>{el.Cur_Name}</p>
  })

  return (
    <>
      <p>{resultHTML}</p>
    </>
  );
}

export default App;
