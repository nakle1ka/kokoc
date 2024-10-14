"use client";

import React, { useEffect } from "react";
import { Metadata } from "next";
import { useStore } from "@/store/useStore";
import { ProfileContainer } from "@/components/profileContainer/ProfileContainer";
import ProfileHeader from "@/modules/profileHeader/ProfileHeader";
import MatchesTable from "../mathesTable/MatchesTable";
import ProfileNav from "@/modules/profileNav/components/profileNav/ProfileNav";
import { Spinner } from "@/components/ui/spinner";

import styles from "./matchesHistory.module.scss";

export const metadata: Metadata = {
  title: "История матчей, Кокос групп",
  description: "Просмотр истории матчей.",
};

const MatchesHistory: React.FC = () => {
  const { fetchMatches, matches, loadingMatches } = useStore();

  useEffect(() => {
    fetchMatches(1);
  }, [fetchMatches]);

  return (
    <ProfileContainer>
      <ProfileHeader />
      <ProfileNav />
      <main className={styles.main}>
        <h1 className={styles.title}>История матчей</h1>
        {loadingMatches ? (
          <Spinner />
        ) : matches.length === 0 ? (
          <p className={styles.emptyMessage}>Ваша история матчей пуста...</p>
        ) : (
          <MatchesTable matches={matches} />
        )}
      </main>
    </ProfileContainer>
  );
};

export default MatchesHistory;
