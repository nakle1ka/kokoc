"use client";

import React from "react";
import ProfileHeader from "@/modules/profileHeader/ProfileHeader";
import MatchesTable from "../mathesTable/MatchesTable";
import ProfileNav from "@/modules/profileNav/ProfileNav";

import styles from "./matchesHistory.module.scss";

const MatchesHistory: React.FC = () => {
  const matches = [
    {
      id: 1,
      name: "Матч 1: Команда A против Команды B",
      date: "2024-09-01",
      attended: true,
    },
    {
      id: 2,
      name: "Матч 2: Команда C против Команды D",
      date: "2024-09-02",
      attended: false,
    },
    {
      id: 3,
      name: "Матч 3: Команда E против Команды F",
      date: "2024-09-03",
      attended: true,
    },
    {
      id: 4,
      name: "Матч 4: Команда G против Команды H",
      date: "2024-09-04",
      attended: false,
    },
    {
      id: 5,
      name: "Матч 5: Команда I против Команды J",
      date: "2024-09-05",
      attended: true,
    },
    {
      id: 6,
      name: "Матч 6: Команда K против Команды L",
      date: "2024-09-06",
      attended: true,
    },
    {
      id: 7,
      name: "Матч 7: Команда M против Команды N",
      date: "2024-09-07",
      attended: false,
    },
    {
      id: 8,
      name: "Матч 8: Команда O против Команды P",
      date: "2024-09-08",
      attended: true,
    },
    {
      id: 9,
      name: "Матч 9: Команда Q против Команды R",
      date: "2024-09-09",
      attended: true,
    },
    {
      id: 10,
      name: "Матч 10: Команда S против Команды T",
      date: "2024-09-10",
      attended: false,
    },
    {
      id: 11,
      name: "Матч 11: Команда U против Команды V",
      date: "2024-09-11",
      attended: true,
    },
    {
      id: 12,
      name: "Матч 12: Команда W против Команды X",
      date: "2024-09-12",
      attended: false,
    },
    {
      id: 13,
      name: "Матч 13: Команда Y против Команды Z",
      date: "2024-09-13",
      attended: true,
    },
    {
      id: 14,
      name: "Матч 14: Команда AA против Команды AB",
      date: "2024-09-14",
      attended: true,
    },
    {
      id: 15,
      name: "Матч 15: Команда AC против Команды AD",
      date: "2024-09-15",
      attended: false,
    },
    {
      id: 16,
      name: "Матч 16: Команда AE против Команды AF",
      date: "2024-09-16",
      attended: true,
    },
  ];

  return (
    <div className={styles.profileContainer}>
      <ProfileHeader />
      <ProfileNav />
      <main className={styles.main}>
        <h1 className={styles.title}>История матчей</h1>
        <MatchesTable matches={matches} />
      </main>
    </div>
  );
};

export default MatchesHistory;
