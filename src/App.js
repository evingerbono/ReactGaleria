import './App.css';
import Kep from './komponensek/Kep';
import { kepLista } from './KepLista';
import { useState } from 'react';
function App() {

  const[aktKep,setAktKep]=useState(0);

  function kattintasKezeles(index) {
    //console.log(index);
    setAktKep(index);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
      </header>
      <section>
        <Kep src={kepLista[aktKep]} />
      </section>
      <article>
        {kepLista.map((elem, index) => {
          return (<Kep src={elem} key={index} index={index} kattintasKezeles={kattintasKezeles} />)
        })
        }
      </article>
      <footer>Evinger Bono</footer>
    </div>
  );
}

export default App;
