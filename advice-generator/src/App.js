import { useEffect, useState } from "react";
import './App.css'
import diceIcon from './images/icon-dice.svg';
import divider from './images/pattern-divider-mobile.svg'

export default function App() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setId(data.slip.id);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <>
    <main className="main-container">
      <p className="adviceId">Advice #{id}</p>
      <div className="advice-container">
        <h1 className="advice">"{advice}"</h1>
      </div>
      <img className="divider" src={ divider } alt='divider'></img>

      <button onClick={getAdvice}><img src={ diceIcon }></img></button>
    </main>
    </>
  );
}
