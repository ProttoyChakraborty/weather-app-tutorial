import { useState } from 'react';
import './App.css';
import { Main } from './Main/Main';
import { Search } from './Search/Search';


function App() {
  const [weather, setWeather] = useState(null)
  
  return (
    <div className="App">
      <header>
        <h1 className='main-heading'>Weather App</h1>
      </header>
      <Search setWeather={setWeather} />
      <Main weather={weather} />
    </div>
  );
}

export default App;
