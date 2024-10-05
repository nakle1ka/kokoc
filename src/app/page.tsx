import Image from "next/image";
import { Matches } from "@/modules/matches/matches";
import { Container } from "@/components/container/container";


export default function Home() {
  return (
    <>
      <Container>

        <Matches />
      </Container>
    </>
  );
}
