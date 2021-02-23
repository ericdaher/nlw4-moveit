import { useState, useEffect } from "react";
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const minutesString = String(minutes).padStart(2, "0").split("");
  const secondsString = String(seconds).padStart(2, "0").split("");

  function startCoundown() {
    setActive(!active);
  }

  useEffect(() => {
    if (active && time > 0) setTimeout(() => setTime(time - 1), 1000);
  }, [active, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minutesString[0]}</span>
          <span>{minutesString[1]}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsString[0]}</span>
          <span>{secondsString[1]}</span>
        </div>
      </div>

      <button
        type="button"
        className={styles.countdownButton}
        onClick={startCoundown}
      >
        {active ? "Parar" : "Iniciar"} um ciclo
      </button>
    </div>
  );
}
