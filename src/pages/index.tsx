import styles from "./styles/pages/Home.module.css";

import Head from "next/head";
import { ExperienceBar } from "./components/ExperienceBar";
import { Profile } from "./components/Profile";
import { CompletedChallenges } from "./components/CompletedChallenges";
import { Countdown } from "./components/Countdown";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar></ExperienceBar>
      <section>
        <div>
          <Profile></Profile>
          <CompletedChallenges></CompletedChallenges>
          <Countdown></Countdown>
        </div>
        <div></div>
      </section>
    </div>
  );
}
