import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ericdaher.png" alt="Eric"></img>
      <div>
        <strong>Eric Daher</strong>
        <p>
          <img src="icons/level.svg" alt="Level"></img>
          Level {level}
        </p>
      </div>
    </div>
  );
}
