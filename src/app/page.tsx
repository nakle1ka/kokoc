import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Carousel } from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import { Command } from "@/components/ui/command";
import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Select } from "@/components/ui/select";

export default function Home() {
  return (
    <div>
      <Button variant="outline">TEST</Button>
      <Calendar />
      <Carousel />
      <Checkbox />
      <Command />
      <Dialog />
      <Input  placeholder="TEST"/>
      <NavigationMenu />
      <Select />
    </div>
  );
}
