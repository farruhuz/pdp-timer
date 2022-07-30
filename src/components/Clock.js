import React, { useState } from "react";
import reload from "../assets/icons/reload.png";
import pause from "../assets/icons/pause.png";
import setting from "../assets/icons/we.png";
import play from "../assets/icons/play.png";
import Modal from "./Modal/Modal";

const Clock = ({ timerHour, timerMinut, timerSecond, changeHandler, playHas, hasPlay, setSecond}) => {

  const [modal, setModal] = useState(false);
  const raloadHandler = ()=>{
    changeHandler("2","59")
    setSecond("59")
  }
  const modalHandler = (e) =>{
    e.preventDefault()
    if(modal){
      setModal(false)
    }
    else{
      setModal(true)
    }
  }
  return (
    <>
      <section className="timer-container">
        <h2>Time countdown</h2>
        <section className="timer">
          <div className="clock">
            <section>
              <p>{timerHour}</p>
              <span>hours</span>
            </section>
            <section>
              <p>{timerMinut}</p>
              <span>Minutes</span>
            </section>
            <section>
              <p>{timerSecond}</p>
              <span>Seconds</span>
            </section>
          </div>
        </section>
        <section className="buttons">
          <button className="btn reload" onClick={raloadHandler}>
            <img src={reload} alt="reload" />
          </button>
          <button className="btn pause" onClick={()=>hasPlay(playHas ? false: true)}>
            {!playHas && (
              <div className="play">
                <img src={play} alt="play" />
              </div>
            )}
            {playHas && (
              <div className="pause">
                <img src={pause} alt="pause" />
                <img src={pause} alt="pause" />
              </div>
            )}
          </button>
          <button className="btn setting" onClick={modalHandler}>
            <img src={setting} alt="setting" />
          </button>
        </section>
      </section>
      {modal && <Modal modalHandler={modalHandler} setModal={setModal} changeHandler={changeHandler} setSecond={setSecond}/>}
    </>
  );
};

export default Clock;
