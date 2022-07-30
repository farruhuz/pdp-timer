import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ modalHandler, changeHandler, setModal, setSecond ,timerHour, timerMinut, timerSecond}) => {
  let [hour, setHour] = useState("");
  let [minut, setMinut] = useState("");

  const hourHandler = (e) => {
    setHour(e.target.value);
  };
  const minutHandler = (e) => {
    setMinut(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (hour >= 0 && minut >= 0) {
      if (hour && minut) {
        changeHandler(hour, minut);
        setModal(false);
        setSecond("59");
      }
      else{
        changeHandler(Number(timerHour), timerMinut);
        setSecond(timerSecond);
        setModal(false);
      }
    } else {
      alert(" 0 =< soat <=24  va  0 =< minut <= 60 bo'lishi kerak");
    }
  };

  return (
    <div className="modal">
      <form className="modal-content">
        <div className="modal-body">
          <input
            type="text"
            value={hour}
            placeholder="Hour"
            onChange={hourHandler}
          />
          <input
            type="text"
            placeholder="Minuts"
            value={minut}
            onChange={minutHandler}
          />
        </div>
        <div className="modal-button">
          <button onClick={submitHandler}>OK</button>
          <button onClick={modalHandler}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
