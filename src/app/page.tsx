import { Metadata } from "next";

import { Matches } from "@/modules/home/matches/matches";
import { HomeNews as News } from "@/modules/home/homeNews/homeNews";
import { Titles } from "@/modules/home/titles/titles";
import { Compound } from "@/modules/home/compound/compound";

export default function Home() {
  return (
    <>
      <Matches />
      <News />
      <Compound />
      <Titles />
    </>
  );
}
