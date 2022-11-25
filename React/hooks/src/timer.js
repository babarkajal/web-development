import { useCallback, useEffect, useState } from "react";

function Timer() {
  const [hrs, setHrs] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [timerStatus, setTimerStatus] = useState(true);

  //IT USES CALLBACK BECAUSE IT HAS DEPENDENCY ON STATE VARIABLES
  const incrementTimer = useCallback(() => {
    setSec(sec + 1);
    if (sec === 60) {
      setMin(min + 1);
      setSec(0);
    }
    if (min === 60) {
      setMin(0);
      setHrs(hrs + 1);
    }
    if (hrs === 24) {
      setHrs(0);
    }
    localStorage.setItem("hrs", hrs);
    localStorage.setItem("sec", sec);
    localStorage.setItem("min", min);
  }, [hrs, sec, min]);

  useEffect(() => {
    if (timerStatus) {
      if (!intervalId) {
        const hrsLocal = parseInt(localStorage.getItem("hrs"));
        const minLocal = parseInt(localStorage.getItem("min"));
        const secLocal = parseInt(localStorage.getItem("sec"));

        if (hrsLocal) setHrs(hrsLocal);
        if (minLocal) setMin(minLocal);
        if (secLocal) setSec(secLocal);
      }

      const id = setInterval(incrementTimer, 1000);
      setIntervalId(id);
      return function stopTimer() {
        clearInterval(id);
      };
    } else {
      resetTimer();
    }
  }, [incrementTimer, timerStatus]);

  //RESET TIMER
  function resetTimer() {
    setHrs(0);
    setMin(0);
    setSec(0);
    localStorage.setItem("hrs", hrs);
    localStorage.setItem("sec", sec);
    localStorage.setItem("min", min);
  }
  return (
    <div className="container">
      <p>Hook is React</p>
      <p>Timer using Hooks</p>
      <p className="timer">
        {hrs >= 10 ? hrs : "0" + hrs}: {min >= 10 ? min : "0" + min} :
        {sec >= 10 ? sec : "0" + sec}
      </p>
      <div
        className="btn btn-danger"
        onClick={() => setTimerStatus(!timerStatus)}
      >
        {timerStatus ? "Stop Timer" : "Start Timer"}
      </div>
    </div>
  );
}

export default Timer;
