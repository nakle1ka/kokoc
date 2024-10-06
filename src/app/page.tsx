'use client'
import Logotype from "@/components/ui/logotype/logotype";
import { MainButton } from "@/components/ui/mainButton/mainButton";

export default function Home() {
  return (
    <div>
      <MainButton text="te" onClick={() => {return null}}></MainButton>
        <Logotype FirstWord="kokoc" SecondWord="news"/>
      
    </div>
  );
}
