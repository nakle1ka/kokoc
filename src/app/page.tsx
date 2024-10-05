'use client'

import { MainButton } from "@/components/ui/mainButton/mainButton";

export default function Home() {
  return (
    <div>
      <MainButton text="d" onClick={() => console.log("test")}/>
    </div>
  );
}
