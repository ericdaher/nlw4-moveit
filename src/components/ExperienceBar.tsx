import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentageToNextLevel = Math.floor(
    (100 * currentExperience) / experienceToNextLevel
  );

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div
          style={{
            width: `${percentageToNextLevel}%`,
          }}
        ></div>
        <span
          className={styles.currentExperience}
          style={{ left: `${percentageToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
