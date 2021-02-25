import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const {
    hasFinished,
    isActive,
    minutes,
    seconds,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const minutesString = String(minutes).padStart(2, "0").split("");
  const secondsString = String(seconds).padStart(2, "0").split("");

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

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Parar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
