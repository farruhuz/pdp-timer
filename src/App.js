import { useEffect, useState } from "react";
import "./App.css";
import Clock from "./components/Clock";

function App() {
  const [hour, setHour] = useState("02");
  const [minut, setMinut] = useState("59");
  const [second, setSecond] = useState("59");
  const [playHas, setPlayHas] = useState(false);
  const hasPlay = (value) => {
    setPlayHas(value);
  };
  const changeHandler = (hour, minut) => {
    writeDisplay(hour, minut);
  };
  const writeDisplay = (hour, minut) => {
    const h = Number(hour) < 10 ? "0" + hour : hour;
    const m = Number(minut) < 10 ? "0" + minut : minut;
    setHour(h);
    setMinut(m);
  };
  let interval = () => {
    if (playHas) {
      let a = setInterval(() => {
        if (Number(hour) === 0 && Number(minut) === 0 && Number(second) === 0) {
          clearInterval(a);
          setPlayHas(false);
        } else if (
          (Number(hour) !== 0 && Number(minut) !== 0 && Number(second) === 0) ||
          (Number(hour) === 0 && Number(minut) !== 0 && Number(second) === 0) 
        ) {
          let min = Number(minut) - 1;
          let b = min >= 10 ? min.toString() : "0" + min.toString();
          setSecond("59");
          setMinut(b);
          clearInterval(a);
        } else if (
          Number(hour) !== 0 &&
          Number(minut) === 0 &&
          Number(second) === 0
        ) {
          let hor = Number(hour) - 1;
          let b = hor >= 10 ? hor.toString() : "0" + hor.toString();
          setSecond("59");
          setMinut("59");
          setHour(b);
          clearInterval(a);
        } else if (
          Number(hour) !== 0 ||
          (playHas && Number(minut) !== 0 && Number(second) !== 0) ||
          Number(minut) === 0
        ) {
          let sekund = Number(second) - 1;
          let b = sekund >= 10 ? sekund.toString() : "0" + sekund.toString();
          setSecond(b);
          clearInterval(a);
        }
      }, 1000);
    }
  };
  useEffect(() => {
    interval();
    console.log("salom");
  }, [playHas, second]);
  return (
    <div className="App">
      <Clock
        timerHour={hour}
        timerMinut={minut}
        timerSecond={second}
        changeHandler={changeHandler}
        hasPlay={hasPlay}
        playHas={playHas}
        setSecond={setSecond}
      />
    </div>
  );
}

export default App;
